import businesses from "./objects/businesses";

const GHL = {
  businesses,
  calendars: {
    get: () => {},
    search: () => {},
    create: () => {},
    update: () => {},
    delete: () => {},
    freeSlots: {
      get: () => {},
    },
    groups: {
      get: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
      disable: () => {},
      validateSlug: () => {},
    },
    appointments: {
      get: () => {},
      search: () => {},
      create: () => {},
      delete: () => {},
    },
    blocks: {
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
    },
    resources: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
    },
  },
  campaigns: {
    search: () => {},
  },
  companies: {
    get: () => {},
  },
  contacts: {
    get: () => {},
    search: () => {},
    findDuplicates: () => {},
    create: () => {},
    update: () => {},
    upsert: () => {},
    delete: () => {},
    business: {
      search: () => {},
      addOrRemove: () => {},
    },
    tasks: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      updateStatus: () => {},
      delete: () => {},
    },
    appointments: {
      get: () => {},
    },
    tags: {
      add: () => {},
      remove: () => {},
    },
    notes: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
    },
    campaigns: {
      add: () => {},
      remove: () => {},
      removeAll: () => {},
    },
    workflows: {
      add: () => {},
      remove: () => {},
    },
    followers: {
      add: () => {},
      remove: () => {},
    },
  },
  conversations: {
    get: () => {},
    search: () => {},
    create: () => {},
    update: () => {},
    delete: () => {},
    emails: {
      get: () => {},
      cancelScheduled: () => {},
    },
    messages: {
      get: () => {},
      search: () => {},
      send: () => {},
      addInbound: () => {},
      addExternalOutboundCall: () => {},
      cancelScheduled: () => {},
      uploadFileAttachments: () => {},
      updateStatus: () => {},
      getRecording: () => {},
      getTranscript: () => {},
      downloadTranscript: () => {},
    },
  },
  courses: {
    import: () => {},
  },
  forms: {
    get: () => {},
    uploadFiles: () => {},
    submissions: {
      get: () => {},
    },
  },
  invoices: {
    generateInvoiceNumber: () => {},
    get: () => {},
    search: () => {},
    create: () => {},
    update: () => {},
    delete: () => {},
    send: () => {},
    void: () => {},
    recordPayment: () => {},
    template: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
    },
    schedule: {
      get: () => {},
      search: () => {},
      create: () => {},
      update: () => {},
      delete: () => {},
      startSchedule: () => {},
      manageAutoPay: () => {},
      cancelScheduled: () => {},
    },
    text2pay: {
      createAndSend: () => {},
    },
  },
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
