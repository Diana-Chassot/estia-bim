function FormFields({ formFields }) {
  return (
    <>
      {formFields.map((field) => (
        <div key={field.id} className="sm:col-span-2">
          <label
            htmlFor={field.id}
            className="block text-sm font-semibold leading-6 text-white"
          >
            {field.label}
            {field.optional && (
              <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">
                (Optional)
              </span>
            )}
          </label>
          <div className="mt-2.5">
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                rows={field.rows}
                name={field.name}
                placeholder={field.placeholder}
                minLength={field.minLength}
                required={field.required}
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:blue sm:text-sm sm:leading-6"
              ></textarea>
            ) : (
              <input
                id={field.id}
                name={field.name}
                type={field.type}
                onChange={field.onChange}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                value={field.value}
                required={field.required}
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:blue sm:text-sm sm:leading-6"
                min={field.min}
                max={field.max}
                minLength={field.minLength}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default FormFields;
