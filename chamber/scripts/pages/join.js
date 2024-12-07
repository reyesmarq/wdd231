import { Layout } from '../components/Layout.js';
import { FormControl } from '../components/form-control.component.js';
import { Badge } from '../components/badge.component.js';
import { Dialog } from '../components/dialog.component.js';
import { useState } from '../utils/use-state.js';

const planData = [
  {
    name: 'Non profit',
    description: `This membership level offers limited access to chamber premium services and resources. This membership is for organizations, you can participate in our premium services and resources`,
  },
  {
    name: 'Bronze',
    description: `This membership level provides basic access to Chamber premium services and resources. You can join the Chamber community and participate in our events and activities.`,
  },
  {
    name: 'Silver',
    description: `This membership level offers advanced access to Chamber premium services and resources. You can join the Chamber community and participate in our events and activities`,
  },
  {
    name: 'Gold',
    description: `This membership level offers unlimited access to Chamber premium services and resources. You can join the Chamber community and participate in our exclusive resources and benefits.`,
  },
];

//! THERE IS A BUG IF I RERENDER WITHOUT MANAGING STATE OF THE INPUTS
const [getBadge, setBadge] = useState({ name: '', description: '' });
const [getIsDialogOpen, setIsDialogOpen] = useState(false);

async function render() {
  const badge = getBadge();
  const isDialogOpen = getIsDialogOpen();
  //const dialogId = getDialogId();

  document.getElementById('root').innerHTML = Layout({
    children: `
      <main class="main" id="main">
        <h1>Home > Join</h1>
        <form action="thankyou.html" method="get" class="form">
          ${FormControl({
            label: 'First name',
            type: 'text',
            required: true,
            autocomplete: 'given-name',
          })}
          ${FormControl({
            label: 'Last name',
            type: 'text',
            required: true,
            autocomplete: 'family-name',
          })}
          ${FormControl({
            label: 'Organization title',
            type: 'text',
            pattern: '^[A-Za-z\\s-]{7,}$',
            required: true,
            autocomplete: 'organization-title',
          })}
          ${FormControl({
            label: 'Email',
            type: 'email',
            placeholder: 'john@gmail.com',
            required: true,
            autocomplete: 'email',
          })}
          ${FormControl({
            label: 'Mobile',
            type: 'text',
            required: true,
            autocomplete: 'phone-number',
          })}
          ${FormControl({
            label: `Business/organization's name`,
            type: 'text',
            required: true,
            autocomplete: 'organization',
          })}
          ${FormControl({
            label: `Membership level`,
            type: 'selection',
            required: true,
            selection: [
              { value: 'np', label: 'Non profit' },
              { value: 'bronze', label: 'Bronze Membership' },
              { value: 'silver', label: 'Silver Membership' },
              { value: 'gold', label: 'Gold Membership' },
            ],
          })}
          <div>
            <h2 class="font:color:secondary">Learn more</h2>
            <div class="flex-container">
              ${Badge({ text: 'Non profit' })}
              ${Badge({ text: 'Bronze Membership' })}
              ${Badge({ text: 'Silver Membership' })}
              ${Badge({ text: 'Gold Membership' })}
            </div>
          </div>
          ${FormControl({
            label: 'description',
            type: 'textarea',
            required: true,
          })}
          ${FormControl({
            label: 'timestamp',
            type: 'hidden',
            defaultValue: new Date().toString(),
          })}
          <div class="form-control">
            <input type="submit" class="btn" value="Submit">
          </div>
        </form>
        ${Dialog({
          id: 'badge-dialog',
          children: `
            <button class="dialog__close" id="closeBttn" type="button">&times;</button>
            <h2 class="dialog__title">${badge.name}</h2>
            <p class="dialog__content">${badge.description}</p>
          `,
        })}
      </main>
    `,
  });

  document.getElementById('badge-dialog').open = isDialogOpen;

  document.querySelectorAll('.badge').forEach((badge, index) => {
    badge.addEventListener('click', () => {
      setBadge(planData[index]);
      setIsDialogOpen(true, render);
    });
  });

  document.getElementById('closeBttn').addEventListener('click', () => {
    setIsDialogOpen(false, render);
  });
}

(async () => {
  await render();
})();
