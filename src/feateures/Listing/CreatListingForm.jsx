import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Moadal from "../../ui/Moadal";
import { useState } from "react";
import Button from "../../ui/Button";
import useCretListing from "../Listing/useCretListing";
import FileInput from "../../ui/FileInput";
import { UseGeolocation } from "../../helpers/UseGeolocation";
import { useMapClick } from "../../context/mapContext";
import { useNavigate } from "react-router-dom";
export default function CreatListingForm() {
  const { clickedPosition } = useMapClick();
  const [open, setOpen] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const { creatListingf } = useCretListing();
  function onSubmit(data) {
    console.log("Submitting:", data);
    creatListingf(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  const { getPosition, position } = UseGeolocation();
  console.log(position);
  return (
    <Moadal open={open}>
      <Form type="form" onSubmit={handleSubmit(onSubmit)}>
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

        <FormRow labels="Address">
          <textarea
            id="addres"
            {...register("addres", { required: "This field is required" })}
            className="border border-gray-300 bg-gray-50 rounded p-[0.8rem_1.2rem] w-[280px] mt-6"
          />
          <Button onClick={getPosition}>get ur position </Button>
          <Button
            onClick={() => {
              useNavigate(-1);
            }}
          >
            {" "}
            search in map{" "}
          </Button>
        </FormRow>
        <FormRow labels="listing photo">
          <FileInput />
        </FormRow>

        <Button
          type="secondary"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        >
          Close
        </Button>

        <button type="submit">Submit</button>
      </Form>
    </Moadal>
  );
}
