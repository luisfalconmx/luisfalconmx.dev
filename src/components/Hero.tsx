type Props = {
  image: string
  title: string
  headline?: string
  description: string
}

const Hero = ({ image, title, headline, description }: Props) => (
  <section className="bg-dark-400 text-white min-h-[894px] flex relative overflow-hidden">
    <div className="max-w-[1170px] mx-auto my-auto relative z-10">
      <img className="block mx-auto" src={image} alt={title} />
      <div className="max-w-[600px] mx-auto text-center mt-7">
        <h1 className="max-w-[390px] mx-auto text-5xl font-extrabold mb-4">
          {title}
        </h1>
        {headline && (
          <strong className="text-2xl font-bold text-dark-100 mb-2 block">
            {headline}
          </strong>
        )}
        <p className="text-xl text-dark-100">{description}</p>
      </div>
    </div>
    {/* Decorators */}
    <div className="w-5/12 h-[760px] z-0 absolute -top-1/3 -left-1/4 bg-[#0047B0] opacity-70 filter blur-[117px]"></div>
    <div className="w-5/12 h-[615px] z-0 absolute top-1/3 -right-1/4 bg-[#6300B0] opacity-50 filter blur-[117px]"></div>
    <div className="w-5/12 h-[615px] z-0 absolute -top-28 -right-1/3 bg-[#00B09B] opacity-50 filter blur-[117px]"></div>
  </section>
)

export default Hero
