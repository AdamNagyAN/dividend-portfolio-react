import * as React from "react";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { Title } from "@tremor/react";
import { ResetPasswordValues } from "./ResetPassword.schema";
import TextField from "../../../components/atoms/text-field/TextField";
import IconButton from "../../../components/molecules/buttons/IconButton";

interface INewPasswordForm {}

const NewPasswordForm: React.FC<INewPasswordForm> = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordValues>();
  const isLoading = false;
  const onSubmit = () => {};

  return (
    <section id='resend-token'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap items-center flex-col'>
        <Title>{t('reset-password.title')}</Title>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='lg:w-3/6 md:w-4/6 max-w-md bg-gray-light rounded-lg p-8 flex flex-col gap-6 w-full mt-10 md:mt-0'
        >
          <div className='flex flex-col gap-4 w-full'>
            <Controller
              control={control}
              name='email'
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    placeholder={t('reset-password.password') ?? ''}
                    value={field.value ?? ''}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                );
              }}
            />
            <Controller
              control={control}
              name='email'
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    placeholder={t('reset-password.confirm-password') ?? ''}
                    value={field.value ?? ''}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                );
              }}
            />
          </div>
          <IconButton
            text={t('reset-password.send') ?? ''}
            loading={isLoading}
            disabled={isLoading}
            className='bg-indigo'
          />
        </form>
      </div>
    </section>
  );
};

export default NewPasswordForm;
