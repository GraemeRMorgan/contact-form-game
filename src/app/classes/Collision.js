
export class Collision {
    constructor(forBody, level, position = null) {
      this.forBody = forBody;
      this.level = level;
      this.placementsAtPosition = [];
      this.x = position ? position.x : forBody.x;
      this.y = position ? position.y : forBody.y;
      this.scanPlacementsAtPosition();
    }
  
    scanPlacementsAtPosition() {
      this.placementsAtPosition = this.level.placements.filter((p) => {
        const isSelf = p.id === this.forBody.id;
        return !isSelf && p.x === this.x && p.y === this.y;
      });
    }
  
    withSolidPlacement() {
      return this.placementsAtPosition.find((p) =>
        p.isSolidForBody(this.forBody)
      );
    }

    withPlacementAddsToInventory() {
      return this.placementsAtPosition.find((p) => {
        return (
          !p.hasBeenCollected && p.addsItemToInventoryOnCollide(this.forBody)
        );
      });
    }

    withCompletesLevel() {
      return this.placementsAtPosition.find((p) => {
        return p.completesLevelOnCollide();
      });
    }

    withLock() {
      return this.placementsAtPosition.find((p) => {
        return p.canBeUnlocked();
      });
    }

    withSelfGetsDamaged() {
      return this.placementsAtPosition.find((p) => {
        return p.damagesBodyOnCollide(this.forBody);
      });
    }

    withChangesHeroSkin() {
      return this.placementsAtPosition.find((p) => {
        return p.changesHeroSkinOnCollide();
      });
    }

    withPlacementMovesBody() {
      if (this.forBody.interactsWithGround) {
        return this.placementsAtPosition.find((p) => {
          return p.autoMovesBodyOnCollide();
        });
      }
      return null;
    }

    withDoorSwitch() {
      return this.placementsAtPosition.find((p) => {
        return p.switchesDoorsOnCollide(this.forBody);
      });
    }

    withConversation(){
      return this.placementsAtPosition.find((p) => {
        return p.conversationOnCollide(this.forBody);
      })
    }

  }