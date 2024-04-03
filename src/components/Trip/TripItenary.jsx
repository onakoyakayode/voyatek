import React, { useEffect } from "react";
import { TbPlaneInflight } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import flightImg from "../../assets/img/Group.svg";
import { TbPlaneDeparture } from "react-icons/tb";
import { TbPlaneArrival } from "react-icons/tb";
import {
  PiSuitcaseRollingBold,
  PiFilmSlateBold,
  PiForkKnifeBold,
  PiUsbDuotone,
} from "react-icons/pi";
import { CgClose } from "react-icons/cg";
// import {  } from "react-icons/pi";
import {
  searchFlights,
  searchDestinations,
  searchMultiStopFlights,
  getFlightDetails,
  fetchFlights,
} from "../../reducers/flightSlice";
import { fetchFlightDetails } from "../../reducers/flightDetailsSlice";

const TripItenary = () => {
  const dispatch = useDispatch();
  const { flightDetails, loading, error } = useSelector(
    (state) => state.flightDetails
  );

  useEffect(() => {
    dispatch(
      fetchFlightDetails({
        itineraryId: "13416-2403111910--32480-0-13554-2403121230",
        token:
          "eyJhIjoiMSIsImMiOjAsImkiOjAsImNjIjoiZWNvbm9teSIsIm8iOiJOWUNBIiwiZCI6IkxBWEEiLCJkMSI6IjIwMjQtMDMtMTEiLCJkMiI6IjIwMjQtMDMtMTgifQ==",
        currency: "USD",
        market: "US",
        locale: "en-US",
      })
    );
    // dispatch(fetchFlights());
    // dispatch(searchMultiStopFlights);
    // dispatch(getFlightDetails());
  }, [dispatch]);

  console.log(flightDetails);

  return (
    <div className="w-full h-screen">
      <div className="mb-7">
        <h3 className="text-2xl font-semibold">Trip itineraries</h3>
        <p className="text-[#647995]">Your trip itineraries are placed here</p>
      </div>
      <div className="bg-[#F0F2F5] w-full max-h-dvh p-5 rounded">
        <div className="flex justify-between items-center">
          <div className="w-[91px] text-[#1D2433] font-semibold flex justify-start items-center gap-3">
            <TbPlaneInflight className="w-6 h-6 object-cover" />
            <h5 className="text-[17px]">Flights</h5>
          </div>
          <h5 className="w-[153px] h-[46px] bg-white rounded flex justify-center items-center text-[#0D6EFD] text-[13px] font-semibold cursor-pointer">
            Add Flights
          </h5>
        </div>

        <div className="mt-[24px]">
          {loading && <div>Loading.....</div>}
          {error && <div>Error: {error}</div>}
          <ul className="w-full h-[274px] flex items-start mb-7">
            <div className="w-[95%] bg-white p-6 rounded">
              <div className="flex justify-between items-center w-full border-b border-[#E4E7EC] pb-6">
                <div className="flex items-center justify-normal gap-4">
                  <img src={flightImg} alt="flight" />
                  <div className="">
                    <h2 className="text-[19px] font-semibold mb-1">
                      American Airlines
                    </h2>
                    <div className="flex items-center gap-1">
                      <h5 className="text-[#676E7E] text-[14px]">AA-829</h5>
                      <p className="w-[2px] h-[2px] bg-[#667185]"></p>
                      <button className="bg-[#0A369D] flex items-center justify-center py-1 px-2 rounded text-[12px] text-white">
                        First Class
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-normal gap-6">
                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-[17px] text-[#1D2433]">
                      08:35
                    </h3>
                    <h5 className="text-[#676E7E] text-[13px]">Sun, 20 Aug</h5>
                  </div>
                  <div className="w-[250px]">
                    <div className="flex justify-between items-center text-[#676E7E] mb-[11px]">
                      <TbPlaneDeparture />
                      <p className="text-[13px] font-medium">
                        Duration: 1h 45m
                      </p>
                      <TbPlaneArrival />
                    </div>
                    <div className="relative bg-[#E7F0FF] w-full h-[5px]">
                      <div className="bg-[#0D6EFD] absolute left-[29%] h-[5px] w-[110px] rounded"></div>
                    </div>
                    <div className="flex justify-between items-center text-[#676E7E] mt-[11px]">
                      <p className="text-[12px] text font-semibold text-[#1D2433]">
                        LOS
                      </p>
                      <p className="text-[13px] font-medium">Direct</p>
                      <p className="text-[12px] font-semibold text-[#1D2433]">
                        SIN
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-[17px] text-[#1D2433]">
                      09:55
                    </h3>
                    <h5 className="text-[#676E7E] text-[13px]">Sun, 20 Aug</h5>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#1D2433] font-semibold text-[20px]">
                    <span className="text-[#344054] font-medium">₦ </span>
                    123,450.00
                  </h3>
                </div>
              </div>
              <div className="text-[#647995] flex items-center justify-start py-6 text-[14px] font-medium border-b border-[#E4E7EC] w-full">
                <h4 className="mr-3">Facilities:</h4>
                <div className="flex items-center justify-start gap-2">
                  <div className="flex items-center justify-normal gap-1">
                    <PiSuitcaseRollingBold className="text-[#475367]" />
                    <h4>Baggage: 20kg, Cabin Baggage: 8kg</h4>
                  </div>
                  <div className="flex items-center justify-normal gap-1">
                    <PiFilmSlateBold className="text-[#475367]" />
                    <h4>In flight entertainment</h4>
                  </div>
                  <div className="flex items-center justify-normal gap-1">
                    <PiForkKnifeBold className="text-[#475367]" />
                    <h4>In flight meal</h4>
                  </div>
                  <div className="flex items-center justify-normal gap-1">
                    <PiUsbDuotone className="text-[#475367]" />
                    <h4>USB Port</h4>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center pt-6 pb-4 text-[15px]">
                <div className="flex justify-start items-center gap-8">
                  <h4 className="text-[#0D6EFD] font-medium">Flight details</h4>
                  <h4 className="text-[#0D6EFD] font-medium">Price details</h4>
                </div>
                <h4 className="text-[#0D6EFD] font-medium">Edit details</h4>
              </div>
            </div>
            <div className="w-[5%] bg-[#FBEAE9] h-full flex justify-center items-center font-medium">
              <CgClose className="text-[#9E0A05] font-semibold cursor-pointer rounded-r" />
            </div>
          </ul>
          <ul className="w-full h-[274px] flex items-start mb-6">
            <div className="w-[95%] bg-white p-6 rounded">
              <div className="flex justify-between items-center w-full border-b border-[#E4E7EC] pb-6">
                <div className="flex items-center justify-normal gap-4">
                  <img src={flightImg} alt="flight" />
                  <div className="">
                    <h2 className="text-[19px] font-semibold mb-1">
                      American Airlines
                    </h2>
                    <div className="flex items-center gap-1">
                      <h5 className="text-[#676E7E] text-[14px]">AA-829</h5>
                      <p className="w-[2px] h-[2px] bg-[#667185]"></p>
                      <button className="bg-[#0A369D] flex items-center justify-center py-1 px-2 rounded text-[12px] text-white">
                        First Class
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-normal gap-6">
                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-[17px] text-[#1D2433]">
                      08:35
                    </h3>
                    <h5 className="text-[#676E7E] text-[13px]">Sun, 20 Aug</h5>
                  </div>
                  <div className="w-[250px]">
                    <div className="flex justify-between items-center text-[#676E7E] mb-[11px]">
                      <TbPlaneDeparture />
                      <p className="text-[13px] font-medium">
                        Duration: 1h 45m
                      </p>
                      <TbPlaneArrival />
                    </div>
                    <div className="relative bg-[#E7F0FF] w-full h-[5px]">
                      <div className="bg-[#0D6EFD] absolute left-[29%] h-[5px] w-[110px] rounded"></div>
                    </div>
                    <div className="flex justify-between items-center text-[#676E7E] mt-[11px]">
                      <p className="text-[12px] text font-semibold text-[#1D2433]">
                        LOS
                      </p>
                      <p className="text-[13px] font-medium">Direct</p>
                      <p className="text-[12px] font-semibold text-[#1D2433]">
                        SIN
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-[17px] text-[#1D2433]">
                      09:55
                    </h3>
                    <h5 className="text-[#676E7E] text-[13px]">Sun, 20 Aug</h5>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#1D2433] font-semibold text-[20px]">
                    <span className="text-[#344054] font-medium">₦ </span>
                    123,450.00
                  </h3>
                </div>
              </div>
              <div className="text-[#647995] flex items-center justify-start py-6 text-[14px] font-medium border-b border-[#E4E7EC] w-full">
                <h4 className="mr-3">Facilities:</h4>
                <div className="flex items-center justify-start gap-2">
                  <div className="flex items-center justify-normal gap-1">
                    <PiSuitcaseRollingBold className="text-[#475367]" />
                    <h4>Baggage: 20kg, Cabin Baggage: 8kg</h4>
                  </div>
                  <div className="flex items-center justify-normal gap-1">
                    <PiFilmSlateBold className="text-[#475367]" />
                    <h4>In flight entertainment</h4>
                  </div>
                  <div className="flex items-center justify-normal gap-1">
                    <PiForkKnifeBold className="text-[#475367]" />
                    <h4>In flight meal</h4>
                  </div>
                  <div className="flex items-center justify-normal gap-1">
                    <PiUsbDuotone className="text-[#475367]" />
                    <h4>USB Port</h4>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center pt-6 pb-4 text-[15px]">
                <div className="flex justify-start items-center gap-8">
                  <h4 className="text-[#0D6EFD] font-medium">Flight details</h4>
                  <h4 className="text-[#0D6EFD] font-medium">Price details</h4>
                </div>
                <h4 className="text-[#0D6EFD] font-medium">Edit details</h4>
              </div>
            </div>
            <div className="w-[5%] bg-[#FBEAE9] h-full flex justify-center items-center font-medium">
              <CgClose className="text-[#9E0A05] font-semibold cursor-pointer rounded-r" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TripItenary;
