import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StepStatus from './StepStatus';

type Props = {
  status: StepStatus;
};

const StatusIndicator = ({ status }: Props) => {
  switch (status) {
    case StepStatus.InProgress:
      return <AdjustIcon fontSize="small" />;
    case StepStatus.Completed:
      return <CheckCircleIcon fontSize="small" />;
    default:
      return <CircleIcon fontSize="small" />;
  }
};

export default StatusIndicator;
