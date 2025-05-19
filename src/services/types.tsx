export type ClassCardProps = {
    order: {
        completed_my_classes: number,
        total_my_classes: number,
        class_completed: string,
        photo: string,
        title: string,
        tutor_photo: string,
        tutor: string,
        tutor_position: string,
        tutor_company: string,
        total_time: number,
        total_price: number,
        progress: number
        id: number,
        status: string,
    }
}

export type PaymentMethod = {
  id: string;
  name: string;
  number: string;
  icon: string;
  key: string;
};

export type PaymentMethodsGroup = {
  [key: string]: PaymentMethod[];
};

export type SegmentCardProps = {
    headContent: React.ReactNode,
    middleContent: React.ReactNode,
    footContent: React.ReactNode
}

export type ClassGroup = {
  key: string;
  name: string;
};

export type ParamsType = {
  status?: string;
};

// Tipe order (sesuaikan jika kamu punya struktur lain)
export type OrderType = {
  id: number;
  // Tambahkan field lain sesuai data order
};

export type FilterProps = {
    id: number; 
    name: string
}
export type classDateItem = {
    id: number;
    name: string;
    photo: string;
    description: string;
    tutor_photo: string;
    tutor: string;
    tutor_position: string;
    tutor_company: string;
    rating_average: number;
    total_selling: number;
    new_price: number;
    type: string;
}

export interface Order {
  name: string;
  description: string;
  tutor: string;
  user_position: string;
  tutor_company: string;
  tutor_photo: string;
  rating: number;
  total_selling: number;
}

export interface User {
  name: string;
}

export type OrderItem = {
    completed_my_classes: number,
    total_my_classes: number,
    class_completed: string,
    photo: string,
    title: string,
    tutor_photo: string,
    tutor: string,
    tutor_position: string,
    tutor_company: string,
    total_time: number,
    name: string,
    price: number,
    progress: number
    id: number,
    status: string,
    no: string,
    paid_at: string,
    total_price: number
};

export interface OrderStatus {
  key: string;
  name: string;
}

export type OrderCardProps = {
    order: OrderItem
}

export type CardItemsPropVal = {
      id: number
      name: string
      photo: string
      description: string
      tutor_photo: string
      tutor: string
      tutor_position: string
      tutor_company: string
      rating_average: number
      total_selling: number
      new_price: number
      type: string
}

export type CardItemsProps = {
    data: CardItemsPropVal
}

export type UseClassParams = {
  id?: number | null;
  limit?: number;
  category_id?: number | null;
  price?: string | null;
  duration?: string | null;
  search?: string | null;
  order_by?: string | null;
};

interface TutorType {
  id: string;
  name: string;
  position: string;
  company: string;
  photo: string;
  description: string;
}

interface ModuleType {
  title: string;
  duration: number;
}

export type ClassType = {
  id: number;
  name: string;
  description?: string;
  new_price: number;
  page_title: string;
  long_description: string;
  tutors: TutorType[];
  modules: ModuleType[];
};

// export type PaymentMethodsGroup = {
//   [key: string]: PaymentMethod[];
// };

export type classCategoriesType = {
    id: number;
    name: string;
}

// export type HowToPay = {
//   id: string;
//   name: string;
//   number: string;
//   icon: string;
//   key: string;
// };

// export type HowToPayGroup = {
//   [key: string]: HowToPay[];
// };

export interface OrderDataType {
  id: number; 
  avatar?: string;
  user?: string;
  user_position?: string;
  user_company?: string;
  rating?: number;
  total_selling?: number;
  order_id?: number;
}

export interface Lesson {
  type: string;
}

export interface TestData {
  id: string | number;
  question?: string;
  answer?: string;
  option_1?: string;
  option_2?: string;
  option_3?: string;
  option_4?: string;
  options?:any
  user_answer?: string; 
  no: number
}

export interface ContentLessonProps {
  orderData: OrderDataType;
  type: string;
  classId: number;
  testNo: number | string | null;
  test: TestData;
  tests: TestData[];
  rules: string;
  resultData: {
    submitted_at: string;
    score: number;
    total_questions: number;
    correct_answers: number;
    wrong_answers: number;
  };
  selectedLesson: Lesson;
}

export type selectedLessonTypes = {
  id: number;
  orderId: number;
  type: string;
  no: number;
  group_name: string;
  status: string;
}

export type PageLessonTypes = {
  id: number;
  orderId: number;
  type: string;
  no: number;
  group_name: string;
  status: string;
  name: string;
}

export interface LessonType {
  id: number;
  type: 'quiz' | 'video' | 'rangkuman';
  name?: string;
  group_name?: string;
  duration?: number;
  status?: string;
}

export interface Section {
  title: string;
  lessons: LessonType[];
}

export type Props = {
    title: string,
    desc?: string,
    varian?: string
    children?: React.ReactNode
}

export type OptionItem = {
  id: number;
  name: string;
};

export type FilterOption = {
  id?: string;
  name: string;
  title: React.ReactNode;
  options: OptionItem[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export type VideoLesssonProps = {
    orderData: OrderDataType,
    selectedLesson: {
        type: string
    }
}

export type TestLessonProps = {
    type: string,
    classId: string | number,
    testNo?: number | string
}

export type ModalReviewProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  user_rating: number;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  totalAnswer: number;
  totalQuestions: number;
  testNo: number | string;
  orderId: string | number | null;
  type: string;
  setModalOpen: any;
};

export type ProgressProps = {
  id: string;
  progress: number;
  completeModule: number;
  totalModule: number;
};

export type QuestionLessonProps = {
    orderData: OrderDataType
    type: string;
    classId: number;
    testNo: number | string;
    test: TestData;
    tests: TestData[];
}

export type TestResultProps = {
    type: string;
    classId: number | string;
    testNo: number | string;
    test: TestData;
    tests: TestData[];
    resultData: {
        submitted_at: string;
        score: number;
        total_questions: number;
        correct_answers: number;
        wrong_answers: number;
    };
}

export type SidebarMenuProps = {
    activeMenu: string
}

export type SidebarMenuItem = {
  name: string;
  url: string;
  icon: string;
  activeIcon: string;
  id: number
};

export type VideoPlayerProps = {
  videoUrl?: string;
};