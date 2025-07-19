import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Moadal from "../../ui/Moadal";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import useCretListing from "../Listing/useCretListing";
import FileInput from "../../ui/FileInput";
import { UseGeolocation } from "../../helpers/UseGeolocation";
import { useMapClick } from "../../context/mapContext";
import { useNavigate } from "react-router-dom";
import { getCityFromCoords } from "../../Services/getCityFromCoords";
export default function CreatListingForm() {
  const navigate = useNavigate();
  const { clickedPosition } = useMapClick();
  const [CityName, setCityName] = useState("");
  const [open, setOpen] = useState(true);
  const { register, handleSubmit, reset, setValue } = useForm();
  const { creatListingf } = useCretListing();
  function onSubmit(data) {
    console.log("Submitting:", data);
    creatListingf(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  useEffect(() => {
    async function fetchCity() {
      if (clickedPosition.lat && clickedPosition.lng) {
        const City = await getCityFromCoords({
          lat: clickedPosition.lat,
          lng: clickedPosition.lng,
        });
        setCityName(City);
        setValue("city", City.city);
      }
    }
    fetchCity();
  }, [clickedPosition, setValue]);
  //const { getPosition, position } = UseGeolocation();
  console.log(CityName);
  return (
    <Moadal open={open}>
      <Form type="form" onSubmit={handleSubmit(onSubmit)}>
        <FormRow labels="city name">
          <Input
            id="listing-name"
            type="text"
            {...register("city", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow labels="Number of rooms">
          <Input
            id="rooms"
            type="number"
            {...register("rooms", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow labels="Title">
          <Input
            id="title"
            type="text"
            {...register("title", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow labels="Description">
          <textarea
            id="description"
            {...register("description", { required: "This field is required" })}
            className=" border border-gray-300 bg-gray-50 rounded p-[0.8rem_1.2rem] w-[280px] mt-6"
          />
        </FormRow>
        <FormRow labels="lat">
          <Input
            value={clickedPosition.lat}
            id="lat"
            type="number"
            {...register("lat", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow labels="lng">
          <Input
            id="lng"
            type="number"
            value={clickedPosition.lng}
            {...register("lng", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow labels="listing photo">
          <FileInput />
        </FormRow>
        <div className="flex ">
          <Button
            type="secondary"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
          >
            Close
          </Button>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Moadal>
  );
}
