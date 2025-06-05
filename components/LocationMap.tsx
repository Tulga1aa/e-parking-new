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
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(
    null
  );
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!mapLoaded && typeof window !== "undefined" && window.google) {
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
            mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
            clickableIcons: false,
          });

          const trafficLayer = new google.maps.TrafficLayer();
          trafficLayer.setMap(map);

          // Таны байршлыг харуулах marker
          const userIconImg = document.createElement("img");
          userIconImg.src =
            "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
          userIconImg.style.width = "32px";
          userIconImg.style.height = "32px";
          userIconImg.style.cursor = "pointer";

          new google.maps.marker.AdvancedMarkerElement({
            position: userLocation,
            map,
            title: "Таны байршил",
            content: userIconImg,
          });

          const directionsService = new google.maps.DirectionsService();
          directionsRendererRef.current = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
          });
          directionsRendererRef.current.setMap(map);

          infoWindowRef.current = new google.maps.InfoWindow();

          PARKING_SPOTS.forEach((spot, index) => {
            const iconImg = document.createElement("img");
            iconImg.src =
              "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
            iconImg.style.width = "32px";
            iconImg.style.height = "32px";
            iconImg.style.cursor = "pointer";

            const marker = new google.maps.marker.AdvancedMarkerElement({
              position: { lat: spot.lat, lng: spot.lng },
              map,
              title: spot.name,
              content: iconImg,
            });

            // Зөвхөн marker дээр дарахад ажиллах listener
            marker.addEventListener("click", () => {
              if (selectedIndex === index) {
                directionsRendererRef.current?.setDirections(null);
                infoWindowRef.current?.close();
                setSelectedIndex(null);
                return;
              }

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
                (result, status) => {
                  if (status === "OK" && result) {
                    directionsRendererRef.current?.setDirections(result);
                    const eta =
                      result.routes[0].legs[0].duration_in_traffic?.text ||
                      "N/A";

                    const content = `
                      <div style="font-family: sans-serif; max-width: 200px;">
                        <h3 style="font-size: 16px; margin-bottom: 8px;">${spot.name}</h3>
                        <p>🚗 Нийт зогсоол: <strong>${spot.totalSpots}</strong></p>
                        <p>🅿️ Сул зогсоол: <strong>${spot.availableSpots}</strong></p>
                        <p>💸 Цагийн үнэ: <strong>${spot.hourlyRate}₮</strong></p>
                        <p>🕒 Очих хугацаа: <strong>${eta}</strong></p>
                      </div>
                    `;
                    infoWindowRef.current?.setContent(content);
                    infoWindowRef.current?.open(map, marker);
                    setSelectedIndex(index);
                  } else {
                    alert("Маршрут олдсонгүй: " + status);
                  }
                }
              );
            });
          });

          setMapLoaded(true);
        },
        () => alert("Таны байршлыг тодорхойлж чадсангүй")
      );
    }
  }, [mapLoaded, selectedIndex]);

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
