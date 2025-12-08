export const categories = [
        "Marketing",
        "Sales",
        "Development",
        "Technology",
        "Business",
    ];

    export const roles = [
        "Co-Founder",
        "Front-end Developer",
        "Designer",
        "Back-end Developer",
        "Director of Product",
        "Project Manager",
        "CEO",
    ];

    export function validate(values) {

        let errors = {};

        //Validate email field
        if (values.title && values.title.length < 6) {
            errors['title'] = "Post title must be at least 6 characters long";
        }
        
        if (!values.title) {
            errors['title'] = "Post title is required";
        }

        if (values.description && values.description.length < 20) {
            errors['description'] = "Post content must be at least 20 characters long";
        }
        
        if (!values.description) {
            errors['description'] = "Post content is required";
        }

        if (values.authorName && values.authorName.length < 5) {
            errors['authorName'] = "Author name must be at least 5 characters long";
        }

        if (!values.authorName) {
            errors['authorName'] = "Author name is required";
        }

        if (!values.companyDepartment) {
            errors['companyDepartment'] = "Company department is required";
        }

         if (!values.authorRole) {
            errors['authorRole'] = "Author role is required";
        }

        return errors;

    }

    
    //export const people = [
    //    {
    //        id: 1,
    //        name: 'Wade Cooper',
    //        avatar:
    //        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //    },
    //    {
    //        id: 2,
    //        name: 'Arlene Mccoy',
    //        avatar:
    //        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //    },
    //    {
    //        id: 3,
    //        name: 'Devon Webb',
    //        avatar:
    //        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    //    },
    //    {
    //        id: 4,
    //        name: 'Tom Cook',
    //        avatar:
    //        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //    },
    //    {
    //        id: 5,
    //        name: 'Tanya Fox',
    //        avatar:
    //        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //    },
    //    {
    //        id: 6,
    //        name: 'Hellen Schmidt',
    //        avatar:
    //        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //    },
    //    {
    //        id: 7,
    //        name: 'Caroline Schultz',
    //        avatar:
    //        'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //    },
    //    {
    //        id: 8,
    //        name: 'Mason Heaney',
    //        avatar:
    //        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //    },
    //    {
    //        id: 9,
    //        name: 'Claudie Smitham',
    //        avatar:
    //        'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //    },
    //    {
    //        id: 10,
    //        name: 'Emil Schaefer',
    //        avatar:
    //        'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //    },
    //]