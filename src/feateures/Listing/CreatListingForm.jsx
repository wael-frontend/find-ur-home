import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Moadal from "../../ui/Moadal";
import { useEffect } from "react";
import Button from "../../ui/Button";
import useCretListing from "../Listing/useCretListing";
import FileInput from "../../ui/FileInput";
import { useMapClick } from "../../context/mapContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
export default function CreatListingForm({ openModal, setOpenmodal }) {
  const navigate = useNavigate();
  const { clickedPosition } = useMapClick();
  const { register, handleSubmit, reset, setValue, formState, getValues } =
    useForm();
  const { creatListingf, isCreating } = useCretListing();
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    creatListingf(
      { ...data, image },
      {
        onSuccess: () => {
          reset();
          navigate("/");
        },
      }
    );
    console.log(data);
  }
  useEffect(() => {
    async function fetchCity() {
      if (clickedPosition.lat && clickedPosition.lng) {
        setValue("city", clickedPosition.city || "");
        setValue("lat", parseFloat(clickedPosition.lat));
        setValue("lng", parseFloat(clickedPosition.lng));
      }
    }
    fetchCity();
  }, [clickedPosition, setValue]);
  //const { getPosition, position } = UseGeolocation();
  return (
    <Moadal open={openModal}>
      <Form noValidate type="form" onSubmit={handleSubmit(onSubmit)}>
        <FormRow labels="city name">
          <Input
            id="listing-name"
            type="text"
            {...register("city", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow labels="Price">
          <Input
            id="price"
            type="number"
            {...register("price", {
              valueAsNumber: true,
              required: "This field is required",
              min: {
                value: 1,
                message: "Capacity at least should be 1",
              },
            })}
          />
        </FormRow>
        <FormRow labels="discount">
          <Input
            id="descount"
            type="number"
            {...register("descount", {
              valueAsNumber: true,
              required: "This field is required",
              validate: (value) =>
                value <= getValues().price ||
                "discount should be less than  regular price ",
            })}
          />
        </FormRow>

        <FormRow labels="number of bathroom">
          <Input
            id="bathroom"
            type="text"
            {...register("bathroom", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow labels="Number of rooms">
          <Input
            id="rooms"
            type="number"
            {...register("rooms", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow labels="Description">
          <textarea
            id="description"
            {...register("description", { required: "This field is required" })}
            className=" border border-gray-300 bg-gray-50 rounded p-[0.8rem_1.2rem] w-[280px] mt-6"
          />
        </FormRow>
        <FormRow labels="Your number">
          <Input
            id="usernumber"
            type="number"
            {...register("usernumber", {
              required:
                "This field is required so the owner can call you about the house",
            })}
          />
          {errors.usernumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.usernumber.message}
            </p>
          )}
        </FormRow>
        <FormRow labels="lat">
          <Input
            id="lat"
            type="number"
            {...register("lat", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow labels="lng">
          <Input
            id="lng"
            type="number"
            {...register("lng", { required: "This field is required" })}
          />
        </FormRow>

        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "this field is requerd",
          })}
        />
        <div className="flex  gap-14">
          <Button
            type="secondary"
            onClick={(e) => {
              e.preventDefault();
              setOpenmodal(!openModal);
            }}
          >
            Close
          </Button>

          <button
            type="submit"
            className="w-[100px] h-[40px] rounded-[4px]  bg-[#18d4b5] text-[#F6EFD2] hover:cursor-pointer"
          >
            {isCreating ? " Submiting..." : "submin"}
          </button>
        </div>
      </Form>
    </Moadal>
  );
}
CreatListingForm.propTypes = {
  setOpenmodal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};
