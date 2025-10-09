const { useState, useEffect } = React;

const ProgressCircle = ({ percentage, color }) => {
  const [progress, setProgress] = useState(0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative w-24 h-24">
      <svg className="transform -rotate-90 w-24 h-24">
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-gray-800">{progress}%</span>
      </div>
    </div>
  );
};

const ProgressBar = ({ percentage, color, label }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-gray-800">{progress}+</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
};

const AchievementCard = ({ icon, title, description, metric, color }) => {
  return (
    <div className="p-6 transition-shadow duration-300">
      <div className="flex flex-col items-center text-center mb-4">
        <div className="mb-4" style={{ color }}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      {metric && (
        <div className="flex justify-center mt-6">
          {metric}
        </div>
      )}
    </div>
  );
};

window.LeadershipAchievements = function LeadershipAchievements() {
  const achievements = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Youth Advocacy",
      description: "Successfully championed initiatives that increased youth participation in party decisions by 40%.",
      metric: <ProgressCircle percentage={40} color="#dc2626" />,
      color: "#dc2626"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Legal Counsel",
      description: "Provided pro-bono legal support to over 100 grassroots members, ensuring their rights were protected.",
      metric: <ProgressBar percentage={100} color="#1e40af" label="Members Served" />,
      color: "#1e40af" 
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Community Mobilization",
      description: "Led voter registration drives that added thousands of new, young voters to the APC family.",
      metric: (
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-1">1000s+</div>
          <div className="text-sm text-gray-600 font-medium">New Voters Registered</div>
        </div>
      ),
      color: "#16a34a"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Digital Transformation",
      description: "Initiated a project to digitize party membership records for improved efficiency and communication.",
      metric: (
        <div className="w-full space-y-3">
          <ProgressBar percentage={85} color="#dc2626" label="Implementation Progress" />
        </div>
      ),
      color: "#dc2626"
    }
  ];

  return (
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-blue-600 to-green-600 mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Proven track record of impactful leadership and dedication to the APC Party and Sierra Leone
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {achievements.map((achievement, index) => (
        <AchievementCard
          key={index}
          icon={achievement.icon}
          title={achievement.title}
          description={achievement.description}
          metric={achievement.metric}
          color={achievement.color}
        />
      ))}
    </div>
  </div>
  );
}