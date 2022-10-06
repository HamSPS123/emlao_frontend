import { AcademyMockApi } from 'app/mock-api/apps/academy/api';
import { ChatMockApi } from 'app/mock-api/apps/chat/api';
import { ContactsMockApi } from 'app/mock-api/apps/contacts/api';
import { ECommerceInventoryMockApi } from 'app/mock-api/apps/ecommerce/inventory/api';
import { FileManagerMockApi } from 'app/mock-api/apps/file-manager/api';
import { HelpCenterMockApi } from 'app/mock-api/apps/help-center/api';
import { MailboxMockApi } from 'app/mock-api/apps/mailbox/api';
import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { NotesMockApi } from 'app/mock-api/apps/notes/api';
import { ScrumboardMockApi } from 'app/mock-api/apps/scrumboard/api';
import { ShortcutsMockApi } from 'app/mock-api/common/shortcuts/api';
import { TasksMockApi } from 'app/mock-api/apps/tasks/api';
import { UserMockApi } from './common/user/api';
import { AuthMockApi } from './common/auth/api';

export const mockApiServices = [
    AcademyMockApi,
    ChatMockApi,
    ContactsMockApi,
    ECommerceInventoryMockApi,
    FileManagerMockApi,
    HelpCenterMockApi,
    MailboxMockApi,
    NavigationMockApi,
    NotesMockApi,
    ScrumboardMockApi,
    ShortcutsMockApi,
    TasksMockApi,
    UserMockApi,
    AuthMockApi
];
