import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sagaLoginUserAc } from '../../redux/actionCreators/userAC'

function Login() {

  const { user } = useSelector((state) => state.userReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      navigate('/')
    };
  }, [user, navigate])

  const {
    register, // позволяет рег-вать различные поля для форм
    formState: {
      errors
    },
    handleSubmit,
    // reset,
  } = useForm({
    mode: 'onSubmit', // варианты валидации. по дефолту onSubmit. Onblur ругается когда уводишь курсор с формы, а форма еще не заполнена
  })

  const onSubmit = (data) => {
    console.log('данные с формы', data);
    dispatch(sagaLoginUserAc(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input
            {...register('email', {
              required: 'Поле обязательно для заполнения', // поле обязательно для заполнения
              // или required: 'Поле обязательно для заполнения'
              minLength: {
                value: 5,
                message: 'минимум 5 символов'
              }
            })}
          />
        </label>
        <label>
          Пароль
          <input
            {...register('password', {
              required: 'Поле обязательно для заполнения', // поле обязательно для заполнения
              // или required: 'Поле обязательно для заполнения'
              minLength: {
                value: 5,
                message: 'минимум 5 символов'
              }
            })}
          />
        </label>
        <input type="submit" />
      </form>
      <div>
        {errors?.email && <p>{errors?.email.message}</p>}

      </div>
      {/* errors?.email.message || 'Error!  */}
    </div>
  );
}

export default Login;
