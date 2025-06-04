"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
  var google: any;
}

type ParkingSpot = {
  lat: number;
  lng: number;
  name: string;
  totalSpots: number;
  availableSpots: number;
  hourlyRate: number; // төгрөгөөр
};

const PARKING_SPOTS: ParkingSpot[] = [
  {
    lat: 47.913944606549684,
    lng: 106.91553934979045,
    name: "Ubcab Сүлд бригад Зогсоол",
    totalSpots: 40,
    availableSpots: 10,
    hourlyRate: 1500,
  },
  {
    lat: 47.91222401930035,
    lng: 106.90042984777698,
    name: "Nomin Market - Хүүхдийн 100 Зогсоол",
    totalSpots: 20,
    availableSpots: 12,
    hourlyRate: 2000,
  },
  {
    lat: 47.89947477876055,
    lng: 106.92779503606793,
    name: "Gerlug Vista Зогсоол",
    totalSpots: 30,
    availableSpots: 5,
    hourlyRate: 2000,
  },
];

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const directionsRendererRef = useRef<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const infoWindowRef = useRef<any>(null);

  useEffect(() => {
    if (!mapLoaded && typeof window !== "undefined") {
      const initMap = () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const userLocation = { lat: latitude, lng: longitude };

            const map = new google.maps.Map(mapRef.current as HTMLElement, {
              center: userLocation,
              zoom: 14,
              streetViewControl: false,
            });
            const trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);

            // Хэрэглэгчийн байршил
            new google.maps.Marker({
              position: userLocation,
              map,
              title: "Таны байршил",
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
              },
            });

            const directionsService = new google.maps.DirectionsService();
            directionsRendererRef.current =
              new google.maps.DirectionsRenderer();
            directionsRendererRef.current.setMap(map);
            infoWindowRef.current = new google.maps.InfoWindow();

            PARKING_SPOTS.forEach((spot, index) => {
              const marker = new google.maps.Marker({
                position: { lat: spot.lat, lng: spot.lng },
                map,
                title: spot.name,
                icon: {
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                },
              });

              marker.addListener("click", () => {
                // InfoWindow доторх HTML контент
                const content = `
                  <div style="font-family: sans-serif">
                    <h3 style="margin-bottom: 8px; font-size: 16px;">${spot.name}</h3>
                    <p>🚗 Нийт зогсоол: <strong>${spot.totalSpots}</strong></p>
                    <p>💸 Цагийн үнэ: <strong>${spot.hourlyRate}₮</strong></p>
                  </div>
                `;
                infoWindowRef.current!.setContent(content);
                infoWindowRef.current!.open(map, marker);

                if (selectedIndex === index) {
                  directionsRendererRef.current?.setDirections({ routes: [] });
                  setSelectedIndex(null);
                } else {
                  directionsService.route(
                    {
                      origin: userLocation,
                      destination: { lat: spot.lat, lng: spot.lng },
                      travelMode: google.maps.TravelMode.DRIVING,
                      drivingOptions: {
                        departureTime: new Date(), // Одоогийн цаг — real-time traffic
                        trafficModel: google.maps.TrafficModel.BEST_GUESS, // эсвэл PESSIMISTIC | OPTIMISTIC
                      },
                    },
                    (result: any, status: any) => {
                      if (status === google.maps.DirectionsStatus.OK) {
                        directionsRendererRef.current?.setDirections(result);

                        // ⏱ ETA-г авч болно:
                        const leg = result.routes[0].legs[0];
                        const etaText =
                          leg.duration_in_traffic?.text || leg.duration.text;
                        console.log("Очих хугацаа (түгжрэлтэй):", etaText);

                        setSelectedIndex(index);
                      } else {
                        alert("Чиглэл олдсонгүй: " + status);
                      }
                    }
                  );
                }
              });
            });

            setMapLoaded(true);
          },
          () => alert("Таны байршлыг тодорхойлж чадсангүй")
        );
      };

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [mapLoaded, selectedIndex]);

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
