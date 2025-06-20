export default function StatisticsSection() {
  const stats = [
    { number: "500+", label: "Youth Trained Annually" },
    { number: "3", label: "States Served" },
    { number: "5", label: "Training Programs" },
    { number: "10+", label: "Community Partners" }
  ];

  return (
    <section className="py-16 bg-fortis-brown text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-fortis-orange mb-2">{stat.number}</div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
