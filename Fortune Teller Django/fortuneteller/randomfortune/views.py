from django.shortcuts import render
import random

# Create your views here.
def fortune(request):
    fortune = random.choice(fortuneList)
    context = {"fortune": fortune}
    return context

def horoscope(request):
    horoscope = random.choice(horoscopeList)
    context = {"horoscope": horoscope}
    return context

def combined_view(request):
    combined_context = {
        "fortune": fortune(request),
        "horoscope": horoscope(request)
    }
    return render(request, "randomfortune/fortune.html", combined_context)

fortuneList = [
    "All will go well with your new project.",
   "If you continually give, you will continually have.",
   "Self-knowledge is a life long process.",
   "You are busy, but you are happy.",
   "Your abilities are unparalleled.",
   "Those who care will make the effort.",
   "Now is the time to try something new.",
   "Miles are covered one step at a time.",
   "Don’t just think, act!"
]

horoscopeList = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra",
                  "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]