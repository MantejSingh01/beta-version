import "./App.css";
import NavBar from "./Components/CommonComponents/NavBar";
import { Outlet, createBrowserRouter } from "react-router-dom";
// import Kids from "./Components/CommonComponents/Kids";
import Container from "./Components/CommonComponents/Container";
import WomenSection from "./Components/CommonComponents/WomenSection";
import MenSection from "./Components/CommonComponents/MenSection";
import ContactPage from "./Components/FeatureComponents/ContactPage";
import TrackOrder from "./Components/FeatureComponents/TrackOrder";
import Download from "./Components/FeatureComponents/Download";
import Error from "./Components/FeatureComponents/Error";
import { lazy,Suspense } from "react";

const Kids = lazy(()=> import("./Components/CommonComponents/Kids") )

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:'/',
        index: true,
        element: <Container />,
      },
      {
        path: 'kids',
        element: (<Suspense fallback="loading in progress">
          <Kids/>
        </Suspense>),
      },
      {
        path: 'women',
        element: <WomenSection />,
      },
      {
        path: 'men',
        element: <MenSection />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'trackOrder',
        element: <TrackOrder />,
      },
      {
        path: 'download',
        element: <Download />,
      },
    ],
  },
]);


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     index:true,
//     children: [
//       {
//         path: "/",
//         element: <Container />,
//         children:[
//           {
//             path: "/kids",
//             element: <Kids />,
//           },
//           {
//             path: "/women",
//             element: <WomenSection />,
//           },
//           {
//             path: "/men",
//             element: <MenSection />,
//           },
//           {
//             path: "/contact",
//             element: <ContactPage />,
//           },
//           {
//             path: "/trackOrder",
//             element: <TrackOrder />,
//           },
//           {
//             path: "/download",
//             element: <Download />,
//           },
//         ]
//       }
      
//     ],
//   },
// ]);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
