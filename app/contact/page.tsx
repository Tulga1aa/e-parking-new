"use client";

import type React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Амжилттай илгээгдлээ!",
      description: "Таны мессежийг хүлээн авлаа. Удахгүй хариулт өгөх болно.",
    });

    // Reset form
    setFormData({
      email: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 ">
      <Link
        href="/"
        className="absolute top-4 left-4 text-gray-600 hover:text-green-600 transition-colors "
      >
        <span className="flex justify-center items-center space-x-2 dark:text-white dark:hover:text-green-600">
          <IoIosArrowBack className="mx-auto w-7 h-7" />
          Буцах
        </span>
      </Link>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4 dark:text-white">
            ХОЛБОО БАРИХ
          </h2>
          <p className="text-gray-600 text-md max-w-2xl mx-auto dark:text-gray-200">
            Асуулт, санал хүсэлт байвал бидэнтэй холбогдоорой. Бид танд хурдан
            хариулт өгөхийг хичээх болно.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 ">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 dark:text-white">
                Холбоо барих мэдээлэл
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 dark:text-white">
                      Утас
                    </h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      +976 7777-7777
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">
                      +976 8888-8888
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 dark:text-white">
                      И-мэйл
                    </h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      info@easyparking.mn
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">
                      support@easyparking.mn
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 dark:text-white">
                      Хаяг
                    </h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Улаанбаатар хот, Сүхбаатар дүүрэг
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">
                      Чингисийн өргөн чөлөө 15, 210648
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Мессеж илгээх
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    И-мэйл хаяг *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Мессеж *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Таны мессежийг энд бичнэ үү..."
                    rows={3}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Илгээж байна...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Санал хүсэлт илгээх</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
