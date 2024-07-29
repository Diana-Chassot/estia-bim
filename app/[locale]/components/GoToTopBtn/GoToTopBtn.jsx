"use client"
import { useEffect, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function GoToTopBtn () {
  const [isVisible, setIsVisible] = useState(false)
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2  z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          "bg-blue/40 hover:bg-blue animate-bounce  inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity",
        )}
      >
        <ChevronUpIcon className="h-8 w-8 text-white"/>
      </button>
    </div>
  )
}