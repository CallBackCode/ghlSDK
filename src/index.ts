import { businesses } from "./objects/businesses";
import { calendars } from "./objects/calendars";
import { campaigns } from "./objects/campaigns";
import { companies } from "./objects/companies";
import { contacts } from "./objects/contacts";
import { conversations } from "./objects/conversations";
import { courses } from "./objects/courses";
import { emails } from "./objects/emails";
import { forms } from "./objects/forms";
import { invoices } from "./objects/invoices";

const GHL = {
  businesses,
  calendars,
  campaigns,
  companies,
  contacts,
  conversations,
  courses,
  emails,
  forms,
  invoices,
  triggerLinks: {
    get: () => {},
    create: () => {},
    update: () => {},
    delete: () => {},
  },
  subaccounts: {
    get: () => {},
    search: () => {},
    create: () => {},
    update: () => {},
    delete: () => {},
    customFields: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
      uploadFile: () => {},
    },
    customValues: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
    },
    snippets: {
      search: () => {},
      delete: () => {},
    },
    tags: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
    },
    tasks: {
      search: () => {},
    },
    timezones: {
      list: () => {},
    },
  },
  media: {
    list: () => {},
    upload: () => {},
    delete: () => {},
  },
  blogs: {
    getAuthors: () => {},
    getCategories: () => {},
    checkSlug: () => {},
    create: () => {},
    update: () => {},
  },
  funnels: {
    listFunnels: () => {},
    listPages: () => {},
    countPages: () => {},
    redirects: {
      list: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
    },
  },
  opportunities: {
    get: () => {},
    search: () => {},
    create: () => {},
    update: () => {},
    updateStatus: () => {},
    upsert: () => {},
    delete: () => {},
    pipelines: {
      list: () => {},
    },
    followers: {
      add: () => {},
      remove: () => {},
    },
  },
  payments: {
    integrations: {
      create: () => {},
      list: () => {},
    },
    orders: {
      get: () => {},
      list: () => {},
      fulfillments: {
        list: () => {},
        create: () => {},
      },
    },
    transactions: {
      get: () => {},
      search: () => {},
    },
    subscriptions: {
      get: () => {},
      search: () => {},
    },
    customProviders: {
      create: () => {},
      delete: () => {},
      config: {
        get: () => {},
        create: () => {},
        disconnect: () => {},
      },
    },
  },
  products: {
    get: () => {},
    search: () => {},
    create: () => {},
    update: () => {},
    delete: () => {},
    prices: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
    },
  },
  saas: {
    get: () => {},
    update: () => {},
    enable: () => {},
    disable: () => {},
    pause: () => {},
    rebilling: {
      update: () => {},
    },
  },
  snapshots: {
    get: () => {},
    getLastPush: () => {},
    getPushByDates: () => {},
    createShareLink: () => {},
  },
  socialPlanner: {
    oauth: {
      google: {
        start: () => {},
        getLocations: () => {},
        setLocations: () => {},
      },
      facebook: {
        start: () => {},
        getPages: () => {},
        attachPages: () => {},
      },
      instagram: {
        start: () => {},
        getAccounts: () => {},
        attachAccounts: () => {},
      },
      linkedin: {
        start: () => {},
        getPages: () => {},
        attachPages: () => {},
      },
      twitter: {
        start: () => {},
        getProfile: () => {},
        attachProfile: () => {},
      },
      tiktok: {
        startPersonal: () => {},
        getPersonal: () => {},
        startBusiness: () => {},
        getBusienss: () => {},
        attachProfile: () => {},
      },
    },
    post: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
    },
    account: {
      get: () => {},
      delete: () => {},
    },
    csv: {
      uploadCSV: () => {},
      getStatus: () => {},
      getPost: () => {},
      setAccounts: () => {},
      startFinalize: () => {},
      deleteCSV: () => {},
      deletePost: () => {},
    },
    categories: {
      get: () => {},
      search: () => {},
    },
    tag: {
      get: () => {},
      search: () => {},
    },
  },
  surveys: {
    get: () => {},
    getSubmissions: () => {},
  },
  users: {
    get: () => {},
    search: () => {},
    listByLocation: () => {},
    create: () => {},
    update: () => {},
    delete: () => {},
  },
  workflows: {
    get: () => {},
  },
};

export default GHL;
