import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      name: "Quartos Executivos",
      description: "Conforto e funcionalidade em ambientes projetados para o seu descanso e produtividade. Ideal para viajantes a trabalho que valorizam eficiência e bem-estar.",
      image: "https://w7startup.com.br/img/clatt/quarto-executivo.png",
      buttonText: "Saiba Mais"
    },
    {
      id: 2,
      name: "Suítes Premium",
      description: "Elegância e exclusividade com espaços amplos, decoração refinada e serviços diferenciados. Perfeitas para estadias que pedem uma experiência superior.",
      image: "https://w7startup.com.br/img/clatt/suite-premium.png",
      buttonText: "Saiba Mais"
    },
    {
      id: 3,
      name: "Cobertura Luxo",
      description: "Exclusividade e sofisticação no ponto mais alto, com vistas deslumbrantes e terraço privativo. A escolha definitiva para uma experiência de luxo incomparável.",
      image: "https://w7startup.com.br/img/clatt/cobertura-luxo.png",
      buttonText: "Saiba Mais"
    }
  ];

  return (
    <section className="py-40 bg-clatt-white font-body">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-light text-clatt-dark tracking-wide mb-4 font-body">
            NOSSOS QUARTOS
          </h2>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {rooms.map((room) => (
            <Card 
              key={room.id} 
              className="border-none shadow-none bg-transparent group cursor-pointer font-body"
            >
              <CardContent className="p-0">
                {/* Room Image */}
                <div className="bg-[#FAFAF7] mb-6 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Room Info */}
                <div className="text-left space-y-4">
                  <h3 className="text-xl font-light text-clatt-dark tracking-wide text-[18px] font-body">
                    {room.name}
                  </h3>
                  
                  <p className="text-sm text-clatt-dark/70 leading-relaxed font-body text-light text-[12px] italic text-justify">
                    {room.description}
                  </p>

                  <Button 
                    variant="ghost" 
                    className="text-clatt-dark underline rounded-none px-0 pb-1 font-light tracking-wide transition-all text-[10px] font-body"
                  >
                    {room.buttonText}
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

export default RoomsSection;
