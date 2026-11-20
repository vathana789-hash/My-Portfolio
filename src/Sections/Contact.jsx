
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/Button";
import { use, useState } from "react";
import emailjs from "@emailjs/browser"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vathana@example.com",
    href: "mailto:vathana@example.com",
  },

  {
    icon: Phone,
    label: "Phone",
    value: "(855+) 123-4567",
    href: "tel:96*****86",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "KompongThmor, KPT",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      message: ""
  }
);

const [isLoading, setIsLoading] = useState(false);
const [submitStatus, setSubmitStatus] = useState({
  type: null, // 'success' or 'error
  message: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true);
  setSubmitStatus({type: null, message: ""});
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error (
        "EmailJS configuration is missing. Please check your environment variable."
        );
    }

    await emailjs.send(serviceId, templateId, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }, publicKey);

    setSubmitStatus ({
      type: "success",
      message: "Message sent successfully I'll get back to you soon,",
    });

  } catch (err){
    console.log("EmailJS error: " ,error);
    
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 w-full h-full">
        <div className="absolute top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's Build{" "}
            <span className="font-serif italic font-normal text-white">
              Something great.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind?  I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6 onSubmit={handleSubmit}">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) => 
                    setFormData({...formData, name: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => 
                    setFormData({...formData, email: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="messages" className="block text-sm font-medium mb-2">
                  Messages
                </label>

                <textarea
                  rows={5}
                  id="messages"
                  required
                  placeholder="Your messages..."
                  value={formData.message}
                  onChange={(e) => 
                    setFormData({...formData, message: e.target.value})
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none hide-scrollbar"
                />
              </div>

              <Button 
                className="w-full flex items-center justify-center py-3 gap-2 "
                size="lg"
                disabled={isLoading}
                >
                { isLoading ? (
                    <>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-5 h-5" />
                    </>
                  )
                }
              </Button>
              
              {/* Tmr is Continue */}
              {/* {
                submitStatus.type && (
                  <div className={`flex items-center gap-3 p-4 rounded-xl ${
                      submitStatus.type === "success" 
                      ? "bg-green-500/10 border boder-green-500/20 
                    }`
                  }>

                  </div>
                )
              } */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;