import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Field,
  Input,
  Button,
} from "@chakra-ui/react";
import Fields from "../Fields/Fields.js";
import { Formik, Form } from "formik";
import { formInitValues } from "./formInitValues";

const Formularz = () => {
  return (
    <div className={"formularz"}>
      <Formik
        initialValues={{ ...formInitValues }}
        validate={(values) => {
          const errors = {};

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <p>Formularz dodawania obywatela</p>

            <FormLabel>Imię: </FormLabel>
            <Input
              type="text"
              value={values.first_name}
              onChange={handleChange}
            />
            <FormLabel>Drugie imię: </FormLabel>
            <Input
              type="text"
              value={values.middle_name}
              onChange={handleChange}
            />
            <FormLabel>Nazwisko: </FormLabel>
            <Input type="text" value={values.surname} onChange={handleChange} />

            <FormLabel>PESEL: </FormLabel>
            <Input type="text" value={values.PESEL} onChange={handleChange} />
            <FormLabel>Data urodzenia: </FormLabel>
            <Input
              type="date"
              value={values.date_of_birth}
              onChange={handleChange}
            />

            <Fields />

            <div className={"home_address"}>
              <p>Adres domowy:</p>
              <FormLabel>Ulica: </FormLabel>
              <Input
                type="text"
                value={values.home_address.street}
                onChange={handleChange}
              />
              <FormLabel>Kod pocztowy: </FormLabel>
              <Input
                type="text"
                value={values.home_address.postal_code}
                onChange={handleChange}
              />
              <FormLabel>Miasto: </FormLabel>
              <Input
                type="text"
                value={values.home_address.city}
                onChange={handleChange}
              />
              <FormLabel>Powiat: </FormLabel>
              <Input
                type="text"
                value={values.home_address.district}
                onChange={handleChange}
              />
              <FormLabel>Gmina: </FormLabel>
              <Input
                type="text"
                value={values.home_address.commune}
                onChange={handleChange}
              />
              <FormLabel>Województwo: </FormLabel>
              <Input
                type="text"
                value={values.home_address.voivodeship}
                onChange={handleChange}
              />
              <FormLabel>Kraj: </FormLabel>
              <Input
                type="text"
                value={values.home_address.country}
                onChange={handleChange}
              />
            </div>

            <div className={"registered_address"}>
              <p>Adres zameldowania:</p>
              <FormLabel>Ulica: </FormLabel>
              <Input
                type="text"
                value={values.registered_address.street}
                onChange={handleChange}
              />
              <FormLabel>Kod pocztowy: </FormLabel>
              <Input
                type="text"
                value={values.registered_address.postal_code}
                onChange={handleChange}
              />
              <FormLabel>Miasto: </FormLabel>
              <Input
                type="text"
                value={values.registered_address.city}
                onChange={handleChange}
              />
              <FormLabel>Powiat: </FormLabel>
              <Input
                type="text"
                value={values.registered_address.district}
                onChange={handleChange}
              />
              <FormLabel>Gmina: </FormLabel>
              <Input
                type="text"
                value={values.registered_address.commune}
                onChange={handleChange}
              />
              <FormLabel>Województwo: </FormLabel>
              <Input
                type="text"
                value={values.registered_address.voivodeship}
                onChange={handleChange}
              />
              <FormLabel>Kraj: </FormLabel>
              <Input
                type="text"
                value={values.registered_address.country}
                onChange={handleChange}
              />
            </div>

            <div className={"family"}>
              <p>Rodzina: </p>
              <FormLabel>Typ: </FormLabel>
              <Input
                type="text"
                value={values.family.family_type}
                onChange={handleChange}
              />
              <FormLabel>PESEL: </FormLabel>
              <Input
                type="text"
                value={values.family.family_PESEL}
                onChange={handleChange}
              />
              <FormLabel>Data urodzenia: </FormLabel>
              <Input
                type="text"
                value={values.family.family_date_of_birth}
                onChange={handleChange}
              />
              <FormLabel>Płeć: </FormLabel>
              <Input
                type="text"
                value={values.family.family_sexOption}
                onChange={handleChange}
              />
            </div>

            <div className={"accomodation"}>
              <p>Informacje dotyczące zakwaterowania</p>
              <FormLabel>Czy mieszkasz z rodzicami?: </FormLabel>
              <Input
                type="text"
                value={values.accomodation.with_parents}
                onChange={handleChange}
              />
              <FormLabel>Liczba osób w gospodarstwie domowym: </FormLabel>
              <Input
                type="text"
                value={values.accomodation.num_of_residents}
                onChange={handleChange}
              />
              <FormLabel>Typ zakwaterowania: </FormLabel>
              <Input
                type="text"
                value={values.accomodation.house_type}
                onChange={handleChange}
              />
            </div>

            <div className={"additional_info"}>
              <p>Dodatkowe Informacje: </p>
              <FormLabel>Dostęp do internetu: </FormLabel>
              <Input
                type="text"
                value={values.additional_info.internet_access}
                onChange={handleChange}
              />
              <FormLabel>Dochód rodziny: </FormLabel>
              <Input
                type="text"
                value={values.additional_info.family_income}
                onChange={handleChange}
              />
              <FormLabel>Liczba samochodów w rodzinie: </FormLabel>
              <Input
                type="text"
                value={values.additional_info.num_of_cars_in_family}
                onChange={handleChange}
              />
              <FormLabel>Niepełnosprawność: </FormLabel>
              <Input
                type="text"
                value={values.additional_info.disability}
                onChange={handleChange}
              />
            </div>

            <Button colorScheme="teal" type="submit" disabled={isSubmitting}>
              Zatwierdź
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formularz;
