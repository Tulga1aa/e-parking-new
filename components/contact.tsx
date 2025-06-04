"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Амжилттай илгээгдлээ!",
      description: "Таны мессежийг хүлээн авлаа. Удахгүй хариулт өгөх болно.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 lg:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">ХОЛБОО БАРИХ</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Асуулт, санал хүсэлт байвал бидэнтэй холбогдоорой. Бид танд хурдан хариулт өгөхийг хичээх болно.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Холбоо барих мэдээлэл</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Утас</h4>
                    <p className="text-gray-600">+976 7777-7777</p>
                    <p className="text-gray-600">+976 8888-8888</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">И-мэйл</h4>
                    <p className="text-gray-600">info@easyparking.mn</p>
                    <p className="text-gray-600">support@easyparking.mn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Хаяг</h4>
                    <p className="text-gray-600">Улаанбаатар хот, Сүхбаатар дүүрэг</p>
                    <p className="text-gray-600">Чингисийн өргөн чөлөө 15, 210648</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ажлын цаг</h4>
                    <p className="text-gray-600">Даваа - Баасан: 09:00 - 18:00</p>
                    <p className="text-gray-600">Бямба - Ням: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Бидний статистик</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-green-700">Дэмжлэг</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{"<2h"}</div>
                    <div className="text-sm text-green-700">Хариулах хугацаа</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-green-700">Сэтгэл ханамж</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">5000+</div>
                    <div className="text-sm text-green-700">Хэрэглэгч</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Мессеж илгээх</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Нэр *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Таны нэрийг оруулна уу"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Утасны дугаар
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="99887766"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Гарчиг *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Мессежийн гарчиг"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Мессеж *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Таны мессежийг энд бичнэ үү..."
                    rows={5}
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
                      <span>Мессеж илгээх</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-black mb-8">Түгээмэл асуулт хариулт</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Хэрхэн зогсоол захиалах вэ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Easy Parking аппликейшнийг татаж аваад, бүртгүүлснээр зогсоол захиалж болно. Газрын зургаас байршлыг
                  сонгоод, цагийг тохируулаад төлбөрөө төлнө үү.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Төлбөрийн аргууд юу вэ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Бид бэлэн мөнгө, картаар төлбөр, мөн цахим төлбөрийн аргуудыг дэмждэг. QPay, SocialPay, банкны карт
                  ашиглаж болно.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Зогсоолын үнэ хэд вэ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Зогсоолын үнэ байршил, цагаас хамаарч өөр өөр байдаг. Ихэвчлэн цагт 500-2000 төгрөгийн хооронд байдаг.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">24 цаг зогсож болох уу?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Тийм, зарим байршилд 24 цагийн зогсоол боломжтой. Урт хугацааны зогсоолд хөнгөлөлт үнэ санал болгодог.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactSection
