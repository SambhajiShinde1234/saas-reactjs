import { useForm } from 'react-hook-form';
import { StyledCard, StyledCardStack } from '../../../components/styled/styled';
import DxPrimaryTypography from '../../../components/ui/DxPrimaryTypography';
import { Grid2 } from '@mui/material';
import DxTextField from '../../../components/ui/DxTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DxDatePicker from '../../../components/ui/DxDatePicker';

const taskValidationSchema = yup.object({
  work: yup.string().trim().required('Work title is required'),
  date: yup.string().required('Date is required'),
  totalWorkers: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .positive('This value must be positive')
    .required('Total workers are required'),
  totalCost: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .positive()
    .required('Total worker cost is required'),
});

const NewWork = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskValidationSchema),
    defaultValues: {
      task: '',
    },
  });

  const onSubmit = () => {};

  return (
    <StyledCardStack>
      <DxPrimaryTypography variant="h6">New Work</DxPrimaryTypography>

      <StyledCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <DxTextField
                label="Work Name"
                name="work"
                placeholder="Enter work name (e.g. harvesting)"
                control={control}
                errorMessage={errors.work?.message}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <DxDatePicker
                label="Date"
                name="date"
                control={control}
                errorMessage={errors.date?.message}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <DxTextField
                label="Total Workers"
                type="number"
                name="noOfWorkers"
                placeholder="Enter total workers"
                control={control}
                errorMessage={errors.totalWorkers?.message}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
              <DxTextField
                label="Total Worker Cost"
                type="number"
                name="totalCost"
                placeholder="Enter total worker cost"
                control={control}
                errorMessage={errors.totalCost?.message}
              />
            </Grid2>
          </Grid2>
        </form>
      </StyledCard>
    </StyledCardStack>
  );
};

export default NewWork;
