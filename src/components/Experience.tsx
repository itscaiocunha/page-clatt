import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      name: "Lounge",
      description: "Ambientes privativos e sofisticados para decisões importantes, equipados com tecnologia de ponta. Ideal para encontros de diretoria e negociações estratégicas.",
      image: "https://w7startup.com.br/img/clatt/louge.png",
      buttonText: "Saiba Mais"
    },
    {
      id: 2,
      name: "Gastronomia",
      description: "Ambiente sofisticado e acolhedor, ideal para almoços de negócios e jantares memoráveis. Criado para despertar os sentidos e proporcionar uma experiência culinária única a cada prato.",
      image: "https://w7startup.com.br/img/clatt/restaurante.png",
      buttonText: "Saiba Mais"
    }
  ];

  return (
    <section className="py-20 bg-background font-body">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-light text-clatt-dark tracking-wide mb-4 font-body">
            EXPERIÊNCIA
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((experience) => (
            <Card key={experience.id} className="border-none shadow-none bg-transparent group cursor-pointer">
              <CardContent className="p-0">
                {/* Experience Image */}
                <div className="bg-gray-200 mb-6 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>

                {/* Experience Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-clatt-dark tracking-wide text-[18px] font-body">
                    {experience.name}
                  </h3>
                  
                  <p className="text-sm text-clatt-dark/70 leading-relaxed font-body text-light text-[12px] italic text-justify">
                    {experience.description}
                  </p>

                  <Button 
                    variant="ghost" 
                    className="text-clatt-dark underline rounded-none px-0 pb-1 font-light tracking-wide transition-all text-[10px] font-body"
                  >
                    {experience.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;