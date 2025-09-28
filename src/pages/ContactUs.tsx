import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

const ContactUs = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [106.8456, -6.2088], // Jakarta coordinates
      zoom: 12
    });

    // Add marker for office location
    new mapboxgl.Marker()
      .setLngLat([106.8456, -6.2088])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setMapInitialized(true);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team. We're here to help and answer any questions you might have.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    About Travium
                  </CardTitle>
                  <CardDescription>
                    Your trusted travel companion for extraordinary adventures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Travium is a leading travel technology company dedicated to making your travel experiences seamless and memorable. 
                    We provide innovative solutions for modern travelers, from booking to exploration.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground">nonalisa@travium.id</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm text-muted-foreground">+62 21 1234 5678</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM WIB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>
                    Find us on the map below
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!mapInitialized && (
                    <div className="space-y-4 mb-4">
                      <div>
                        <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                        </p>
                        <div className="flex gap-2">
                          <Input
                            id="mapbox-token"
                            type="text"
                            placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGV..."
                            value={mapboxToken}
                            onChange={(e) => setMapboxToken(e.target.value)}
                          />
                          <Button onClick={initializeMap} disabled={!mapboxToken}>
                            Load Map
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div 
                    ref={mapContainer} 
                    className={`w-full h-80 rounded-lg ${!mapInitialized ? 'bg-muted flex items-center justify-center' : ''}`}
                  >
                    {!mapInitialized && (
                      <p className="text-muted-foreground">Enter your Mapbox token to load the map</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Contact Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Other Ways to Reach Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Customer Support</span>
                    <span className="text-sm text-muted-foreground">24/7 Live Chat</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">WhatsApp</span>
                    <span className="text-sm text-muted-foreground">+62 812 3456 7890</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Social Media</span>
                    <span className="text-sm text-muted-foreground">@travium_id</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Emergency Support</span>
                    <span className="text-sm text-muted-foreground">+62 21 999 8888</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;