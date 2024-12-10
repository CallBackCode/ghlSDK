# GHL SDK

Welcome to the unofficial GHL SDK! This library provides a convenient interface for interacting with the **HighLevel (GHL)** API. All routes and subroutes are organized into an easy-to-use structure for streamlined development. This package is open-source and provided for free to help streamline development of the HighLevel platform. If you find this package helpful, consider [Supporting Us Here](https://callbackcode.com/donate). Your contributions will help keep this package up to date with the ever changing landscape that is HighLevel.

---

## Installation

Install the GHL SDK from npm using the following command:

```bash
npm i @cllbk/ghl

```

---

## Usage

To get started, use a **named import** to access the `GHL` object from the library:

```typescript
import { GHL } from "@ampcllbk/ghl";

// Example: Using a GHL method with chaining
await ghl.contacts
  .create({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));

// example using GHL method with try/catch
try {
  const contactRes = await ghl.contacts.create({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
  });

  if (!contact.contact) {
    throw new Error("Contact creation unsuccessful");
  }

  console.log(contact.contact);
} catch (error: unknown) {
  // handle errors
  console.error(error.message);
}
```

### Key Features:

1.  **Structure:** All routes and subroutes are accessible as subkeys and methods on the `GHL` object.
2.  **Error Handling:** Comprehensive error management for API requests.
3.  **Typed Responses:** If you're using TypeScript, enjoy full type support for all API responses and payloads.
4.  **Exponential Backoff with Random Jitters:** Error codes that should be retried are automatically handled with grace.

---

## Contribution Guidelines

We welcome contributions to improve the SDK! If you find an issue or want to propose a change, please follow these steps:

1.  **Fork the Repository**\
    Visit the GitHub repository: [GHL SDK GitHub Repository](https://github.com/CallBackCode/ghlSDK)\
    Click the **Fork** button to create your own copy of the repository.

2.  **Make Changes**\
    Clone the repository to your local machine and create a new branch for your changes:

    ```
    git clone https://github.com/CallBackCode/ghlSDK
    cd ghlSDK
    git checkout -b fix/issue-description

    ```

3.  **Submit a Pull Request**\
    Once your changes are complete and tested, push the branch to your forked repository and create a pull request (PR) against the main repository.

    Include:

    - A clear title and description of the issue/feature.
    - A summary of the changes made.
    - Steps for reproducing and verifying the fix, if applicable.

    **NOTE:** Pull requests not including the above will not be considered for the SDK

---

## Issues and Feedback

If you encounter any issues or have feedback, feel free to:

- Open an issue on GitHub: [Report an Issue](https://github.com/CallBackCode/ghlSDK/issues)
- Reach out to the maintainer directly at <support@callbackcode.com>

---

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC). Feel free to use it in your projects.

---

## Example API Endpoints

Here's an overview of the available routes. For detailed usage, refer to the [HighLevel documentation](https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-overview).

### Blogs

```typescript
GHL.blogs.getAuthors();
GHL.blogs.getCategories();
GHL.blogs.checkSlug();
GHL.blogs.create();
GHL.blogs.update();
```

### Businesses

```typescript
GHL.businesses.get();
GHL.businesses.listByLocation();
GHL.businesses.create();
GHL.businesses.update();
GHL.businesses.delete();
```

### Calendars

```typescript
GHL.calendars.get();
GHL.calendars.search();
GHL.calendars.create();
GHL.calendars.update();
GHL.calendars.delete();
GHL.calendars.appointments.create();
GHL.calendars.appointments.search();
GHL.calendars.appointments.create();
GHL.calendars.appointments.update();
GHL.calendars.appointments.delete();
GHL.calendars.blocks.search();
GHL.calendars.blocks.create();
GHL.calendars.blocks.update();
GHL.calendars.blocks.delete();
GHL.calendars.blocks.delete();
GHL.calendars.freeSlots.get();
GHL.calendars.groups.search();
GHL.calendars.groups.create();
GHL.calendars.groups.update();
GHL.calendars.groups.delete();
GHL.calendars.groups.disable();
GHL.calendars.groups.validateSlug();
GHL.calendars.notes.search();
GHL.calendars.notes.create();
GHL.calendars.notes.update();
GHL.calendars.notes.delete();
GHL.calendars.resources.get();
GHL.calendars.resources.search();
GHL.calendars.resources.create();
GHL.calendars.resources.update();
GHL.calendars.resources.delete();
```

### Campaigns

```typescript
GHL.campaigns.search();
```

### Companies

```typescript
GHL.companies.get();
```

### Contacts

```typescript
GHL.contacts.get();
GHL.contacts.search();
GHL.contacts.findDuplicates();
GHL.contacts.create();
GHL.contacts.update();
GHL.contacts.upsert();
GHL.contacts.delete();
GHL.contacts.appointments.search();
GHL.contacts.campaigns.search();
GHL.contacts.campaigns.search();
GHL.contacts.followers.add();
GHL.contacts.followers.remove();
GHL.contacts.notes.get();
GHL.contacts.notes.search();
GHL.contacts.notes.create();
GHL.contacts.notes.update();
GHL.contacts.notes.delete();
GHL.contacts.tags.add();
GHL.contacts.tags.remove();
GHL.contacts.tasks.get();
GHL.contacts.tasks.search();
GHL.contacts.tasks.create();
GHL.contacts.tasks.update();
GHL.contacts.tasks.updateStatus();
GHL.contacts.tasks.delete();
GHL.contacts.workflows.add();
GHL.contacts.workflows.remove();
```

### Conversations

```typescript
GHL.conversations.get();
GHL.conversations.search();
GHL.conversations.create();
GHL.conversations.update();
GHL.conversations.delete();
GHL.conversations.emails.get();
GHL.conversations.emails.cancelScheduled();
GHL.conversations.messages.get();
GHL.conversations.messages.search();
GHL.conversations.messages.send();
GHL.conversations.messages.addInbound();
GHL.conversations.messages.addExternalOutboundCall();
GHL.conversations.messages.cancelScheduled();
GHL.conversations.messages.uploadFileAttachments();
GHL.conversations.messages.updateStatus();
GHL.conversations.messages.getTranscript();
```

### Courses

```typescript
GHL.courses.import();
```

### Emails

```typescript
GHL.emails.search();
GHL.emails.create();
GHL.emails.update();
GHL.emails.delete();
```

### Forms

```typescript
GHL.forms.search();
GHL.forms.submissions.search();
```

### Funnels

```typescript
GHL.funnels.listFunnels();
GHL.funnels.listPages();
GHL.funnels.countPages();
GHL.funnels.redirects.search();
GHL.funnels.redirects.create();
GHL.funnels.redirects.update();
GHL.funnels.redirects.delete();
```

### Invoices

```typescript
GHL.invoices.get();
GHL.invoices.search();
GHL.invoices.create();
GHL.invoices.update();
GHL.invoices.delete();
GHL.invoices.send();
GHL.invoices.void();
GHL.invoices.recordPayment();
GHL.invoices.generateInvoiceNumber();
GHL.invoices.schedules.get();
GHL.invoices.schedules.search();
GHL.invoices.schedules.create();
GHL.invoices.schedules.update();
GHL.invoices.schedules.delete();
GHL.invoices.schedules.startSchedule();
GHL.invoices.schedules.manageAutoPay();
GHL.invoices.schedules.cancelScheduled();
GHL.invoices.templates.get();
GHL.invoices.templates.search();
GHL.invoices.templates.create();
GHL.invoices.templates.update();
GHL.invoices.templates.delete();
GHL.invoices.text2pay.createAndSend();
```

### Locations

```typescript
GHL.locations.get();
GHL.locations.search();
GHL.locations.create();
GHL.locations.update();
GHL.locations.delete();
GHL.locations.customFields.get();
GHL.locations.customFields.search();
GHL.locations.customFields.create();
GHL.locations.customFields.update();
GHL.locations.customFields.delete();
GHL.locations.customValues.get();
GHL.locations.customValues.search();
GHL.locations.customValues.create();
GHL.locations.customValues.update();
GHL.locations.customValues.delete();
GHL.locations.tags.get();
GHL.locations.tags.search();
GHL.locations.tags.create();
GHL.locations.tags.update();
GHL.locations.tags.delete();
GHL.locations.tasks.search();
GHL.locations.timezones.search();
```

### Opportunities

```typescript
GHL.opportunities.get();
GHL.opportunities.create();
GHL.opportunities.update();
GHL.opportunities.updateStatus();
GHL.opportunities.upsert();
GHL.opportunities.delete();
GHL.opportunities.followers.add();
GHL.opportunities.followers.remove();
```

### Payments

```typescript
GHL.payments.customProviders.create();
GHL.payments.customProviders.delete();
GHL.payments.customProviders.config.get();
GHL.payments.customProviders.config.create();
GHL.payments.customProviders.config.disconnect();
GHL.payments.integrations.search();
GHL.payments.integrations.create();
GHL.payments.orders.get();
GHL.payments.orders.list();
GHL.payments.orders.fullfillments.list();
GHL.payments.orders.fullfillments.create();
GHL.payments.subscriptions.get();
GHL.payments.subscriptions.search();
GHL.payments.transactions.get();
GHL.payments.transactions.search();
```

### Pipelines

```typescript
GHL.pipelines.list();
```

### Products

```typescript
GHL.products.get();
GHL.products.search();
GHL.products.create();
GHL.products.update();
GHL.products.delete();
GHL.products.prices.get();
GHL.products.prices.search();
GHL.products.prices.create();
GHL.products.prices.update();
GHL.products.prices.delete();
```

### SaaS

```typescript
GHL.saas.get();
GHL.saas.update();
GHL.saas.enable();
GHL.saas.disable();
GHL.saas.pause();
GHL.saas.rebilling.update();
```

### Snapshots

```typescript
GHL.snapshots.get();
GHL.snapshots.getLastPush();
GHL.snapshots.getPushByDates();
GHL.snapshots.createShareLink();
```

### Surveys

```typescript
GHL.surveys.get();
GHL.surveys.getSubmissions();
```

### Trigger Links

```typescript
GHL.triggerLinks.search();
GHL.triggerLinks.create();
GHL.triggerLinks.update();
GHL.triggerLinks.delete();
```

### Users

```typescript
GHL.users.get();
GHL.users.search();
GHL.users.listByLocation();
GHL.users.create();
GHL.users.update();
GHL.users.delete();
```

### Workflows

```typescript
GHL.workflows.search();
```

---

Thank you for using the **GHL SDK Provided by CallBack**! Your contributions and feedback are invaluable. 🚀
