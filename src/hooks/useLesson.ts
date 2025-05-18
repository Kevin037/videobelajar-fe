import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CompleteModuleThunk, fetchExamByNo, fetchOrderLessonById, submitTestThunk, updateAnswerThunk } from '../services/api/lessonSlice';
import { PageLessonTypes, selectedLessonTypes } from '@/services/types';

const useLesson = (
  id?: number | string | null, 
  orderId: number | string | null = null, 
  type: string | null = null, 
  no: number | string | null = null): {
  id?: number | string | null;
  orderId?: number | null;
  type?: string | null;
  no?: string | number | null;
  selectedLesson: selectedLessonTypes;
  beforeLesson: PageLessonTypes;
  afterLesson: PageLessonTypes;
  test: any;
  tests: any;
  status: boolean;
  submitStatus: boolean;
  answerStatus: boolean;
  resultData: any;
  completeModule: any;
  submitTest: any;
  updateAnswer: any;
} => {
  const dispatch = useDispatch();
  const {selectedLesson,beforeLesson,afterLesson,test,tests,status,submitStatus,answerStatus,resultData} = useSelector((state) => state.lesson);
  const loading = useSelector(state => state.class.loading);
  const error = useSelector(state => state.class.error);

  const updateAnswer = (AnswerData) => {
    dispatch(updateAnswerThunk(AnswerData));
  };

  const submitTest = (orderLessonId) => {
    dispatch(submitTestThunk(orderLessonId));
  };

  const completeModule = (id) => {
    dispatch(CompleteModuleThunk(id));
  };

  useEffect(() => {
    if (no) {
      dispatch(fetchExamByNo(no));
    }
    if (id) {
      dispatch(fetchOrderLessonById(id)); 
    }
  }, [dispatch,id,orderId,type,no]);

  return { selectedLesson, loading, error, beforeLesson, afterLesson, test, tests, updateAnswer,status, submitTest, submitStatus, completeModule,answerStatus, resultData };
};

export default useLesson;
