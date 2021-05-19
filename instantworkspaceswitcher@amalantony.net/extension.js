/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

/* exported init */

const WorkspaceAnimation = imports.ui.workspaceAnimation;

class Extension {
  constructor() {
    this.oldAnimateSwitch =
      WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch;
  }

  enable() {
    WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch = function (
      _from,
      _to,
      _direction,
      onComplete
    ) {
      onComplete();
    };
  }

  disable() {
    WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch = this.oldAnimateSwitch;
  }
}

function init() {
  return new Extension();
}
