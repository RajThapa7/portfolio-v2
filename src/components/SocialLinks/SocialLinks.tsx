interface ISocialProps {
  id: number;
  icon: any;
  hover: string;
  link: string;
}

export default function SocialLinks({ data }: { data: ISocialProps[] }) {
  return (
    <div className="inline-flex gap-x-6">
      {data.map(({ icon, link, id, hover }) => (
        <a href={link} target="_blank" key={id}>
          <p
            className={`transition-smooth text-2xl rounded-full p-2 ring-2 ring-gray-700 hover:ring-0 text-white ${hover}`}
          >
            {icon}
          </p>
        </a>
      ))}
    </div>
  );
}
