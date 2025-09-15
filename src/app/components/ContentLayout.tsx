type Props = {
    title?: string;
    header?: React.ReactNode;    // e.g., breadcrumbs or meta
    children: React.ReactNode;
  };
  
  export default function ContentLayout({ title, header, children }: Props) {
    return (
      <div className="px-4 py-6 md:px-6">
        {header}
        {title ? <h1 className="text-3xl font-bold mb-6">{title}</h1> : null}
        <article className="prose prose-slate max-w-none mx-auto">
          {children}
        </article>
      </div>
    );
  }