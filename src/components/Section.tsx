interface Props {
  id: string;
  children: React.ReactNode;
}

const Section = ({ id, children }: Props) => {
  return (
    <section id={id} className="min-h-screen p-10">
      {children}
    </section>
  );
};

export default Section;