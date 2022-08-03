import { useEffect, useState } from 'react';
import { QUERY_USEREMAIL } from './queries/userQueries';
import { useQuery } from '@apollo/client';

const useForm = (initial = []) => {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');
  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);
  // 
  // Handle Input Changes
  //
  const handleChange = (e) => {
    let { value, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
      setInputs({ ...inputs, [e.target.name]: value });
    } else if (type === 'file') {
      [value] = e.target.files;
      setInputs({ ...inputs, [e.target.name]: value });
    } else {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
  };
  //
  // Reset Form Input
  //
  const resetForm = () => {
    let formInputs = inputs;
    for (let key of Object.keys(formInputs)) {
      formInputs = {
        ...formInputs,
        [key]: ''
      }
    }
  };
  //
  // Email Validation
  //
  const validEmail = (email) => {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      return true;
    }
    else {
      return false;
    }
  }
  //
  // Email already registered?
  //
  const { data } = useQuery(QUERY_USEREMAIL, {
    variables: {
      email: inputs.email ? inputs.email : "fake@email.com"
    }
  });
  const emailExists = () => {
    return data?.user?.email ? true : false;
  }
  // Return 
  return { inputs, handleChange, validEmail, emailExists, resetForm };
};
export default useForm;
