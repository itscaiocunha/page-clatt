import { MapPin, Heart, Coffee, Car } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-clatt-blue">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-clatt-white tracking-wide mb-4 font-body">
              NOSSA LOCALIZAÇÃO
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Address & Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-clatt-white mt-1" />
                <div>
                  <h3 className="text-xl font-light text-clatt-white mb-2 font-body">
                    Endereço
                  </h3>
                  <p className="text-clatt-white/90 leading-relaxed font-body italic font-light">
                    Av. Profa. Isette Corrèa Fontão, 265, Jardim Vila Rica<br />
                    São João da Boa Vista - SP<br />
                    CEP: 13876-750
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-clatt-white/30 pl-6">
                <p className="text-clatt-white/90 leading-relaxed font-body text-justify">
                  Situada no coração da Serra da Mantiqueira, São João da Boa Vista é uma cidade histórica, cultural e acolhedora, que alia beleza natural, patrimônio preservado, eventos marcantes e boas condições de vida. Seja para quem visita ou mora, é um verdadeiro refúgio ao estilo interiorano, com charme, educação e progresso.
                </p>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="space-y-4">
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.4590830106863!2d-46.791852!3d-21.993714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9cb3f015b8555%3A0xdec2b6e8dae6987c!2sClatt%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1755709239199!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="400" 
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;