export default function FileInput(props) {
  return (
    <input
      type="file"
      className="text-[1.4rem] rounded-sm file:font-inherit file:font-medium 
                 file:px-4 file:py-[0.8rem] file:mr-5 file:rounded-sm file:border-none 
                 file:text-brand-50 file:bg-brand-600 file:cursor-pointer 
                 file:transition-colors file:duration-200 hover:file:bg-brand-700"
      {...props}
    />
  );
}
