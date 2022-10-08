/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'ໜ້າຫຼັກ',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/home',
    },
    {
        id: 'shops',
        title: 'ຮ້ານຄ້າ',
        type: 'basic',
        icon: 'mat_solid:storefront',
        link: '/shop',
    },
    {
        id: 'info',
        title: 'ຂໍ້ມູນ',
        type: 'group',
        icon: 'mat_solid:info',
        children: [
            {
                id: 'about',
                title: 'ກ່ຽວກັບພວກເຮົາ',
                type: 'basic',
                icon: 'mat_solid:info',
                link: '/app/about',
            },
            {
                id: 'contact',
                title: 'ຂໍ້ມູນຕິດຕໍ່',
                type: 'basic',
                icon: 'mat_solid:perm_contact_calendar',
                link: '/app/contact',
            },
            {
                id: 'policy',
                title: 'ນະໂຍບາຍ',
                type: 'basic',
                icon: 'mat_solid:policy',
                link: '/app/policy',
            },
        ],
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        tooltip: 'Dashboards',
        type: 'aside',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        tooltip: 'Apps',
        type: 'aside',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'DASHBOARDS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'APPS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'ໜ້າຫຼັກ',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/home',
    },{
        id: 'shops',
        title: 'ຮ້ານຄ້າ',
        type: 'basic',
        icon: 'mat_solid:storefront',
        link: '/shop',
    },
    {
        id: 'info',
        title: 'ຂໍ້ມູນ',
        type: 'group',
        icon: 'mat_solid:info',
        children: [],
    },

];
