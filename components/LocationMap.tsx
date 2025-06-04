"use client";
/// <reference types="@types/google.maps" />

import { useEffect, useRef, useState } from "react";

type ParkingSpot = {
  lat: number;
  lng: number;
  name: string;
  totalSpots: number;
  availableSpots: number;
  hourlyRate: number;
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
  const infoWindowRef = useRef<any>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!mapLoaded && typeof window !== "undefined" && window.google) {
      const mapInit = () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            const map = new google.maps.Map(mapRef.current as HTMLElement, {
              center: userLocation,
              zoom: 14,
              streetViewControl: false,
            });

            const trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);

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
                const content = `
                  <div style="font-family: sans-serif">
                    <h3 style="margin-bottom: 8px; font-size: 16px;">${spot.name}</h3>
                    <p>🚗 Нийт зогсоол: <strong>${spot.totalSpots}</strong></p>
                    <p>🅿️ Сул зогсоол: <strong>${spot.availableSpots}</strong></p>
                    <p>💸 Цагийн үнэ: <strong>${spot.hourlyRate}₮</strong></p>
                  </div>
                `;
                infoWindowRef.current.setContent(content);
                infoWindowRef.current.open(map, marker);

                if (selectedIndex === index) {
                  directionsRendererRef.current.setDirections({ routes: [] });
                  setSelectedIndex(null);
                } else {
                  directionsService.route(
                    {
                      origin: userLocation,
                      destination: { lat: spot.lat, lng: spot.lng },
                      travelMode: google.maps.TravelMode.DRIVING,
                      drivingOptions: {
                        departureTime: new Date(),
                        trafficModel: google.maps.TrafficModel.BEST_GUESS,
                      },
                    },
                    (result: any, status: any) => {
                      if (status === "OK") {
                        directionsRendererRef.current.setDirections(result);
                        const eta =
                          result.routes[0].legs[0].duration_in_traffic?.text;
                        console.log("ETA:", eta);
                        setSelectedIndex(index);
                      } else {
                        alert("Маршрут олдсонгүй: " + status);
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

      mapInit();
    }
  }, [mapLoaded, selectedIndex]);

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
