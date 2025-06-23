import React from 'react'
import PricingCard from './PricingCard'

function Plan() {

    const  plans = [ {
      id: 'basic',
      name: 'Basic Plan',
      price: 5,
      pricePeriod: 'Month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      isBestPlan: false,
      features: [
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: false },
        { text: 'Enter your checklist here.', isActive: false },
      ]
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      price: 37,
      pricePeriod: 'Month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      isBestPlan: true,
      features: [
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: false },
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: 55,
      pricePeriod: 'Month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      isBestPlan: false,
      features: [
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: true },
        { text: 'Enter your checklist here.', isActive: false },
        { text: 'Enter your checklist here.', isActive: false },
      ]
    }]

  return (
    <section className="min-h-screen flex justify-center items-center mt-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plan