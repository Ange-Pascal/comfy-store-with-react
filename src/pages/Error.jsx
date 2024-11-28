import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            Page not found
          </h1> 
          <p>Sorry, we couldn't find the page you're looking for.</p>
          <div className="mt-10"> 
            <Link className="btn btn-secondary">Go back to home</Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  );
};

export default Error;
