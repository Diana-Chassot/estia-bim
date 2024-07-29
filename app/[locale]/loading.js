export default function Loading () {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-pulse rounded-full  h-24 w-24">
        <div className="flex flex-shrink-0 items-center">
                <img
                 
                  src={"/images/Logo/logo-icon.png"}
                  alt="EstiaBim"
                />
             
              </div>
        </div>
      </div>
    );
  };