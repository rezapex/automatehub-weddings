'use client'

import { useState } from 'react'
import { Button } from "@/components/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companySize: '',
        industry: '',
        primaryUse: '',
        features: []
    })

    const totalSteps = 5

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = (feature) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter(f => f !== feature)
                : [...prev.features, feature]
        }))
    }

    const handleNext = () => {
        if (step < totalSteps) setStep(prev => prev + 1)
    }

    const handlePrevious = () => {
        if (step > 1) setStep(prev => prev - 1)
    }

    const isStepValid = () => {
        switch (step) {
            case 1:
                return formData.name.trim() !== '' && formData.email.trim() !== ''
            case 2:
                return formData.companySize !== ''
            case 3:
                return formData.industry !== ''
            case 4:
                return formData.primaryUse !== ''
            default:
                return true
        }
    }

    return (
        <Card className="w-[550px]">
            <CardHeader>
                <CardTitle>SaaS Onboarding - Step {step} of {totalSteps}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {step === 1 && (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <div className="space-y-2">
                            <Label>Company Size</Label>
                            <RadioGroup value={formData.companySize} onValueChange={(value) => handleSelectChange('companySize', value)}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="1-10" id="1-10" />
                                    <Label htmlFor="1-10">1-10 employees</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="11-50" id="11-50" />
                                    <Label htmlFor="11-50">11-50 employees</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="51-200" id="51-200" />
                                    <Label htmlFor="51-200">51-200 employees</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="201+" id="201+" />
                                    <Label htmlFor="201+">201+ employees</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-2">
                            <Label htmlFor="industry">Industry</Label>
                            <Select value={formData.industry} onValueChange={(value) => handleSelectChange('industry', value)}>
                                <SelectTrigger id="industry">
                                    <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="technology">Technology</SelectItem>
                                    <SelectItem value="finance">Finance</SelectItem>
                                    <SelectItem value="healthcare">Healthcare</SelectItem>
                                    <SelectItem value="education">Education</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-2">
                            <Label>Primary Use Case</Label>
                            <RadioGroup value={formData.primaryUse} onValueChange={(value) => handleSelectChange('primaryUse', value)}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="personal" id="personal" />
                                    <Label htmlFor="personal">Personal Use</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="business" id="business" />
                                    <Label htmlFor="business">Business Use</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="education" id="education" />
                                    <Label htmlFor="education">Educational Use</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Summary</h3>
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Company Size:</strong> {formData.companySize}</p>
                            <p><strong>Industry:</strong> {formData.industry}</p>
                            <p><strong>Primary Use:</strong> {formData.primaryUse}</p>
                            <div className="space-y-2">
                                <Label>Interested Features</Label>
                                <div className="space-y-2">
                                    {['Analytics', 'Collaboration', 'Integration', 'Security'].map((feature) => (
                                        <div key={feature} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={feature}
                                                checked={formData.features.includes(feature)}
                                                onCheckedChange={() => handleCheckboxChange(feature)}
                                            />
                                            <Label htmlFor={feature}>{feature}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handlePrevious} disabled={step === 1}>Previous</Button>
                <Button onClick={handleNext} disabled={step === totalSteps || !isStepValid()}>
                    {step === totalSteps ? 'Finish' : 'Next'}
                </Button>
            </CardFooter>
        </Card>
    )
}