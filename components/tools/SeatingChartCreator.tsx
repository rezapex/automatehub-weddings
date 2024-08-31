"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Users, Wand2 } from "lucide-react"

const layoutTemplates = [
  { id: "grid3x3", name: "3x3 Grid", svg: "M0 0h3v3H0zM4 0h3v3H4zM8 0h3v3H8zM0 4h3v3H0zM4 4h3v3H4zM8 4h3v3H8zM0 8h3v3H0zM4 8h3v3H4zM8 8h3v3H8z" },
  { id: "mixedLayout", name: "Mixed Layout", svg: "M0 0h3v3H0zM4 0h3v3H4zM8 0h3v6H8zM0 4h3v3H0zM4 4h3v3H4zM0 8h7v3H0z" },
  { id: "longTables", name: "Long Tables", svg: "M0 0h11v3H0zM0 4h11v3H0zM0 8h11v3H0z" },
]

export default function Component() {
  const [selectedLayout, setSelectedLayout] = useState("")
  const [guests, setGuests] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [generatedChart, setGeneratedChart] = useState("")

  const handleGenerateChart = async () => {
    // Simulate AI processing
    setGeneratedChart("AI is generating your seating chart...")
    
    // In a real application, you would call the Vercel AI API here
    // For this example, we'll just simulate a delay and return a mock result
    setTimeout(() => {
      setGeneratedChart("Your AI-generated seating chart is ready! Here's a summary:\n\n" +
        "- Total guests: " + guests.split('\n').length + "\n" +
        "- Layout: " + layoutTemplates.find(l => l.id === selectedLayout)?.name + "\n" +
        "- Special requests accommodated\n\n" +
        "The AI has optimized seating arrangements based on your input. " +
        "You can now fine-tune the chart as needed.")
    }, 2000)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">AI Seating Chart Creator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="layout">Select a Layout Template</Label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {layoutTemplates.map((template) => (
              <div
                key={template.id}
                className={`border rounded-lg p-4 cursor-pointer ${
                  selectedLayout === template.id ? "border-primary" : "border-gray-200"
                }`}
                onClick={() => setSelectedLayout(template.id)}
              >
                <svg viewBox="0 0 11 11" className="w-full h-auto">
                  <path d={template.svg} fill="currentColor" />
                </svg>
                <p className="text-center mt-2 text-sm">{template.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="guests">Guest List</Label>
          <Textarea
            id="guests"
            placeholder="Enter guest names (one per line)"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            rows={5}
          />
        </div>
        <div>
          <Label htmlFor="specialRequests">Special Requests</Label>
          <Textarea
            id="specialRequests"
            placeholder="Enter any special seating requests or considerations"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            rows={3}
          />
        </div>
        <div>
          <Button onClick={handleGenerateChart} disabled={!selectedLayout || !guests}>
            <Wand2 className="mr-2 h-4 w-4" />
            Generate AI Seating Chart
          </Button>
        </div>
        {generatedChart && (
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Generated Seating Chart</h3>
            <pre className="whitespace-pre-wrap text-sm">{generatedChart}</pre>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Import Guest List
        </Button>
        <Button variant="outline">
          <Users className="mr-2 h-4 w-4" />
          Manage Guests
        </Button>
      </CardFooter>
    </Card>
  )
}