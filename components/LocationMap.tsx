"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
  var google: any;
}

type Coordinate = {
  lat: number;
  lng: number;
  name: string;
};

const PARKING_SPOTS: Coordinate[] = [
  { lat: 47.913944606549684, lng: 106.91553934979045, name: "Зогсоол 1" },
  { lat: 47.91222401930035, lng: 106.90042984777698, name: "Зогсоол 2" },
  { lat: 47.89947477876055, lng: 106.92779503606793, name: "Зогсоол 3" },
];

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const directionsRendererRef = useRef<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
            });

            // Хэрэглэгчийн байршлын маркер
            new google.maps.Marker({
              position: userLocation,
              map,
              title: "Таны байршил",
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              },
            });

            const directionsService = new google.maps.DirectionsService();
            directionsRendererRef.current =
              new google.maps.DirectionsRenderer();
            directionsRendererRef.current.setMap(map);

            // Зогсоолын маркерууд
            PARKING_SPOTS.forEach((spot, index) => {
              const marker = new google.maps.Marker({
                position: { lat: spot.lat, lng: spot.lng },
                map,
                title: spot.name,
              });

              marker.addListener("click", () => {
                if (selectedIndex === index) {
                  // Арилгах
                  directionsRendererRef.current?.setDirections({ routes: [] });
                  setSelectedIndex(null);
                } else {
                  // Шинэ чиглэл зурна
                  directionsService.route(
                    {
                      origin: userLocation,
                      destination: { lat: spot.lat, lng: spot.lng },
                      travelMode: google.maps.TravelMode.DRIVING,
                    },
                    (result: any, status: any) => {
                      if (status === google.maps.DirectionsStatus.OK) {
                        directionsRendererRef.current?.setDirections(result);
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
