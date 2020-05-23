import React ,{useReducer} from 'react'
import ClientInfoForm from './ClientInfoForm'
import Button from "@material-ui/core/Button";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles } from "@material-ui/core";
import { useFormik } from 'formik';
import Typography from '@material-ui/core/Typography';


import Alert from '@material-ui/lab/Alert';



const useStyles = makeStyles(theme => ({

   
    Box : { 
        justifyContent: "center",
    },

  inputControl : {

    minWidth : 120 , 
  }
}))

const validate = values => {
    const errors = {};
    if (!values.nom) {
      errors.nom = 'Veuillez remplir le champ nom';
    } else if (values.nom.length > 40 || values.nom.length < 3) {
      errors.nom = 'Must be between 3 and 40 characters';
    }
  
    if (!values.prenom) {
      errors.prenom = 'Veuillez remplir le champ prenom';
    } else if (values.prenom.length > 40 || values.prenom.length < 3) {
      errors.nom = 'Must be between 3 and 40 characters';
    }
  
    if (!values.date_naiss) {
      errors.date_naiss = 'Veuillez remplir le champ date de naissance ';
    } 
    if (!values.type_piece) {
        errors.type_piece = 'Veuillez remplir le champ type de piece';
      } 
      if (!values.numero_piece) {
        errors.numero_piece = 'Veuillez remplir le champ numéro de pièce';
      } 
      if (!values.date_exp) {
        errors.date_exp = "Veuillez remplir le champ date d'expiration";
      } 
    
    
  
    return errors;
  };

const ClientInfo = () => {

    const formik = useFormik({
        initialValues: {
            nom : '',
            prenom : '',
            date_naiss : '',
            type_piece : '',
            numero_piece : '',
            date_exp : '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    const classes = useStyles();

    function getSteps() {
      return ['Informations generale de client', 'Type de requete', 'Informations concernant la requete'];
    }
  
    function getStepContent(step) {
      switch (step) {
        case 0:
          return (
  
            <ClientInfoForm errors={formik.errors} handleFormikChange={formik.handleChange} values={formik.values}/>
            
          )

        case 1:
          return 'What is an ad group anyways?';
        case 2:
          return 'This is the bit I really care about!';
        default:
          return 'Unknown step';
      }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const isStepOptional = step => {
      return step === 1;
    };
  
    const isStepSkipped = step => {
      return skipped.has(step);
    };

    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      setSkipped(prevSkipped => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    console.log()

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit}>
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div style={{textAlign: "center",marginTop:"50px"}}>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Precedent
                </Button>
                <Button
                  disabled={Object.keys(formik.errors).length > 0 ? "disabled" : null}
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Fin' : 'Suivant'}
                </Button>
              </div>
            </div>
            </form>
          )}
        </div>
      </div>
    );

    }
export default ClientInfo;