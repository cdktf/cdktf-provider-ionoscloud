# `vcpuServer` Submodule <a name="`vcpuServer` Submodule" id="@cdktf/provider-ionoscloud.vcpuServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VcpuServer <a name="VcpuServer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server ionoscloud_vcpu_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

new vcpuServer.VcpuServer(scope: Construct, id: string, config: VcpuServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig">VcpuServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig">VcpuServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putLabel">putLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic">putNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootCdrom">resetBootCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootImage">resetBootImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetFirewallruleIds">resetFirewallruleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImagePassword">resetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetNic">resetNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetSecurityGroupsIds">resetSecurityGroupsIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetVmState">resetVmState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLabel` <a name="putLabel" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putLabel"></a>

```typescript
public putLabel(value: IResolvable | VcpuServerLabel[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putLabel.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>[]

---

##### `putNic` <a name="putNic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic"></a>

```typescript
public putNic(value: VcpuServerNic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts"></a>

```typescript
public putTimeouts(value: VcpuServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume"></a>

```typescript
public putVolume(value: VcpuServerVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetBootCdrom` <a name="resetBootCdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootCdrom"></a>

```typescript
public resetBootCdrom(): void
```

##### `resetBootImage` <a name="resetBootImage" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootImage"></a>

```typescript
public resetBootImage(): void
```

##### `resetFirewallruleIds` <a name="resetFirewallruleIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetFirewallruleIds"></a>

```typescript
public resetFirewallruleIds(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImageName"></a>

```typescript
public resetImageName(): void
```

##### `resetImagePassword` <a name="resetImagePassword" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImagePassword"></a>

```typescript
public resetImagePassword(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetNic` <a name="resetNic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetNic"></a>

```typescript
public resetNic(): void
```

##### `resetSecurityGroupsIds` <a name="resetSecurityGroupsIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetSecurityGroupsIds"></a>

```typescript
public resetSecurityGroupsIds(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVmState` <a name="resetVmState" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetVmState"></a>

```typescript
public resetVmState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VcpuServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isConstruct"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

vcpuServer.VcpuServer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformElement"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

vcpuServer.VcpuServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformResource"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

vcpuServer.VcpuServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

vcpuServer.VcpuServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VcpuServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VcpuServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VcpuServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VcpuServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootVolume">bootVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cpuFamily">cpuFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleId">firewallruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.inlineVolumeIds">inlineVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.label">label</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList">VcpuServerLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference">VcpuServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryIp">primaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryNic">primaryNic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference">VcpuServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference">VcpuServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdromInput">bootCdromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImageInput">bootImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.coresInput">coresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIdsInput">firewallruleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePasswordInput">imagePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.labelInput">labelInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nicInput">nicInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ramInput">ramInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.securityGroupsIdsInput">securityGroupsIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmStateInput">vmStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdrom">bootCdrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImage">bootImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cores">cores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIds">firewallruleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePassword">imagePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ram">ram</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmState">vmState</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bootVolume`<sup>Required</sup> <a name="bootVolume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootVolume"></a>

```typescript
public readonly bootVolume: string;
```

- *Type:* string

---

##### `cpuFamily`<sup>Required</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cpuFamily"></a>

```typescript
public readonly cpuFamily: string;
```

- *Type:* string

---

##### `firewallruleId`<sup>Required</sup> <a name="firewallruleId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleId"></a>

```typescript
public readonly firewallruleId: string;
```

- *Type:* string

---

##### `inlineVolumeIds`<sup>Required</sup> <a name="inlineVolumeIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.inlineVolumeIds"></a>

```typescript
public readonly inlineVolumeIds: string[];
```

- *Type:* string[]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.label"></a>

```typescript
public readonly label: VcpuServerLabelList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList">VcpuServerLabelList</a>

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nic"></a>

```typescript
public readonly nic: VcpuServerNicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference">VcpuServerNicOutputReference</a>

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryIp"></a>

```typescript
public readonly primaryIp: string;
```

- *Type:* string

---

##### `primaryNic`<sup>Required</sup> <a name="primaryNic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryNic"></a>

```typescript
public readonly primaryNic: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeouts"></a>

```typescript
public readonly timeouts: VcpuServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference">VcpuServerTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volume"></a>

```typescript
public readonly volume: VcpuServerVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference">VcpuServerVolumeOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `bootCdromInput`<sup>Optional</sup> <a name="bootCdromInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdromInput"></a>

```typescript
public readonly bootCdromInput: string;
```

- *Type:* string

---

##### `bootImageInput`<sup>Optional</sup> <a name="bootImageInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImageInput"></a>

```typescript
public readonly bootImageInput: string;
```

- *Type:* string

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.coresInput"></a>

```typescript
public readonly coresInput: number;
```

- *Type:* number

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `firewallruleIdsInput`<sup>Optional</sup> <a name="firewallruleIdsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIdsInput"></a>

```typescript
public readonly firewallruleIdsInput: string[];
```

- *Type:* string[]

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `imagePasswordInput`<sup>Optional</sup> <a name="imagePasswordInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePasswordInput"></a>

```typescript
public readonly imagePasswordInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.labelInput"></a>

```typescript
public readonly labelInput: IResolvable | VcpuServerLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nicInput`<sup>Optional</sup> <a name="nicInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nicInput"></a>

```typescript
public readonly nicInput: VcpuServerNic;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

---

##### `ramInput`<sup>Optional</sup> <a name="ramInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ramInput"></a>

```typescript
public readonly ramInput: number;
```

- *Type:* number

---

##### `securityGroupsIdsInput`<sup>Optional</sup> <a name="securityGroupsIdsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.securityGroupsIdsInput"></a>

```typescript
public readonly securityGroupsIdsInput: string[];
```

- *Type:* string[]

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VcpuServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>

---

##### `vmStateInput`<sup>Optional</sup> <a name="vmStateInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmStateInput"></a>

```typescript
public readonly vmStateInput: string;
```

- *Type:* string

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volumeInput"></a>

```typescript
public readonly volumeInput: VcpuServerVolume;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `bootCdrom`<sup>Required</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdrom"></a>

```typescript
public readonly bootCdrom: string;
```

- *Type:* string

---

##### `bootImage`<sup>Required</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImage"></a>

```typescript
public readonly bootImage: string;
```

- *Type:* string

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `firewallruleIds`<sup>Required</sup> <a name="firewallruleIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIds"></a>

```typescript
public readonly firewallruleIds: string[];
```

- *Type:* string[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imagePassword`<sup>Required</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePassword"></a>

```typescript
public readonly imagePassword: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `vmState`<sup>Required</sup> <a name="vmState" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmState"></a>

```typescript
public readonly vmState: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VcpuServerConfig <a name="VcpuServerConfig" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

const vcpuServerConfig: vcpuServer.VcpuServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.cores">cores</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#cores VcpuServer#cores}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#datacenter_id VcpuServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.ram">ram</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#ram VcpuServer#ram}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootCdrom">bootCdrom</a></code> | <code>string</code> | The associated boot drive, if any. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootImage">bootImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#boot_image VcpuServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.firewallruleIds">firewallruleIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#firewallrule_ids VcpuServer#firewallrule_ids}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.hostname">hostname</a></code> | <code>string</code> | The hostname of the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#id VcpuServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#image_name VcpuServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imagePassword">imagePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#image_password VcpuServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.label">label</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>[]</code> | label block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | The list of Security Group IDs for the server. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.vmState">vmState</a></code> | <code>string</code> | Sets the power state of the vcpu server. Possible values: `RUNNING` or `SHUTOFF`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#cores VcpuServer#cores}.

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#datacenter_id VcpuServer#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#ram VcpuServer#ram}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.volume"></a>

```typescript
public readonly volume: VcpuServerVolume;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#volume VcpuServer#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}.

---

##### `bootCdrom`<sup>Optional</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootCdrom"></a>

```typescript
public readonly bootCdrom: string;
```

- *Type:* string

The associated boot drive, if any.

Must be the UUID of a bootable CDROM image that can be retrieved using the ionoscloud_image data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#boot_cdrom VcpuServer#boot_cdrom}

---

##### `bootImage`<sup>Optional</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootImage"></a>

```typescript
public readonly bootImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#boot_image VcpuServer#boot_image}.

---

##### `firewallruleIds`<sup>Optional</sup> <a name="firewallruleIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.firewallruleIds"></a>

```typescript
public readonly firewallruleIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#firewallrule_ids VcpuServer#firewallrule_ids}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The hostname of the resource.

Allowed characters are a-z, 0-9 and - (minus). Hostname should not start with minus and should not be longer than 63 characters. If no value provided explicitly, it will be populated with the name of the server

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#hostname VcpuServer#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#id VcpuServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#image_name VcpuServer#image_name}.

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imagePassword"></a>

```typescript
public readonly imagePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#image_password VcpuServer#image_password}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.label"></a>

```typescript
public readonly label: IResolvable | VcpuServerLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>[]

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#label VcpuServer#label}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.nic"></a>

```typescript
public readonly nic: VcpuServerNic;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#nic VcpuServer#nic}

---

##### `securityGroupsIds`<sup>Optional</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

The list of Security Group IDs for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#security_groups_ids VcpuServer#security_groups_ids}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#ssh_keys VcpuServer#ssh_keys}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VcpuServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#timeouts VcpuServer#timeouts}

---

##### `vmState`<sup>Optional</sup> <a name="vmState" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.vmState"></a>

```typescript
public readonly vmState: string;
```

- *Type:* string

Sets the power state of the vcpu server. Possible values: `RUNNING` or `SHUTOFF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#vm_state VcpuServer#vm_state}

---

### VcpuServerLabel <a name="VcpuServerLabel" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

const vcpuServerLabel: vcpuServer.VcpuServerLabel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#key VcpuServer#key}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#value VcpuServer#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#key VcpuServer#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#value VcpuServer#value}.

---

### VcpuServerNic <a name="VcpuServerNic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

const vcpuServerNic: vcpuServer.VcpuServerNic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.lan">lan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#lan VcpuServer#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#dhcp VcpuServer#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcpv6">dhcpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#dhcpv6 VcpuServer#dhcpv6}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewall">firewall</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>[]</code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallActive">firewallActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#firewall_active VcpuServer#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallType">firewallType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#firewall_type VcpuServer#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ips">ips</a></code> | <code>string[]</code> | Collection of IP addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#ipv6_cidr_block VcpuServer#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6Ips">ipv6Ips</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#ipv6_ips VcpuServer#ipv6_ips}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.mac">mac</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#mac VcpuServer#mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | The list of Security Group IDs for the NIC. |

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.lan"></a>

```typescript
public readonly lan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#lan VcpuServer#lan}.

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#dhcp VcpuServer#dhcp}.

---

##### `dhcpv6`<sup>Optional</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcpv6"></a>

```typescript
public readonly dhcpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#dhcpv6 VcpuServer#dhcpv6}.

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewall"></a>

```typescript
public readonly firewall: IResolvable | VcpuServerNicFirewall[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>[]

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#firewall VcpuServer#firewall}

---

##### `firewallActive`<sup>Optional</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallActive"></a>

```typescript
public readonly firewallActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#firewall_active VcpuServer#firewall_active}.

---

##### `firewallType`<sup>Optional</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#firewall_type VcpuServer#firewall_type}.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

Collection of IP addresses assigned to a nic.

Explicitly assigned public IPs need to come from reserved IP blocks, Passing value null or empty array will assign an IP address automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#ips VcpuServer#ips}

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#ipv6_cidr_block VcpuServer#ipv6_cidr_block}.

---

##### `ipv6Ips`<sup>Optional</sup> <a name="ipv6Ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6Ips"></a>

```typescript
public readonly ipv6Ips: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#ipv6_ips VcpuServer#ipv6_ips}.

---

##### `mac`<sup>Optional</sup> <a name="mac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#mac VcpuServer#mac}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `securityGroupsIds`<sup>Optional</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

The list of Security Group IDs for the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#security_groups_ids VcpuServer#security_groups_ids}

---

### VcpuServerNicFirewall <a name="VcpuServerNicFirewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

const vcpuServerNicFirewall: vcpuServer.VcpuServerNicFirewall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#protocol VcpuServer#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpCode">icmpCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#icmp_code VcpuServer#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpType">icmpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#icmp_type VcpuServer#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeEnd">portRangeEnd</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#port_range_end VcpuServer#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeStart">portRangeStart</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#port_range_start VcpuServer#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceIp">sourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#source_ip VcpuServer#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceMac">sourceMac</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#source_mac VcpuServer#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.targetIp">targetIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#target_ip VcpuServer#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#type VcpuServer#type}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#protocol VcpuServer#protocol}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpCode"></a>

```typescript
public readonly icmpCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#icmp_code VcpuServer#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#icmp_type VcpuServer#icmp_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `portRangeEnd`<sup>Optional</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeEnd"></a>

```typescript
public readonly portRangeEnd: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#port_range_end VcpuServer#port_range_end}.

---

##### `portRangeStart`<sup>Optional</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeStart"></a>

```typescript
public readonly portRangeStart: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#port_range_start VcpuServer#port_range_start}.

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#source_ip VcpuServer#source_ip}.

---

##### `sourceMac`<sup>Optional</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceMac"></a>

```typescript
public readonly sourceMac: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#source_mac VcpuServer#source_mac}.

---

##### `targetIp`<sup>Optional</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.targetIp"></a>

```typescript
public readonly targetIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#target_ip VcpuServer#target_ip}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#type VcpuServer#type}.

---

### VcpuServerTimeouts <a name="VcpuServerTimeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

const vcpuServerTimeouts: vcpuServer.VcpuServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#create VcpuServer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#default VcpuServer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#delete VcpuServer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#update VcpuServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#create VcpuServer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#default VcpuServer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#delete VcpuServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#update VcpuServer#update}.

---

### VcpuServerVolume <a name="VcpuServerVolume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

const vcpuServerVolume: vcpuServer.VcpuServerVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.diskType">diskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#disk_type VcpuServer#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.backupUnitId">backupUnitId</a></code> | <code>string</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.bus">bus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#bus VcpuServer#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.exposeSerial">exposeSerial</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true` will expose the serial id of the disk attached to the server. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.licenceType">licenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#licence_type VcpuServer#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.size">size</a></code> | <code>number</code> | The size of the volume in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.userData">userData</a></code> | <code>string</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#disk_type VcpuServer#disk_type}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}.

---

##### `backupUnitId`<sup>Optional</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.backupUnitId"></a>

```typescript
public readonly backupUnitId: string;
```

- *Type:* string

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#backup_unit_id VcpuServer#backup_unit_id}

---

##### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.bus"></a>

```typescript
public readonly bus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#bus VcpuServer#bus}.

---

##### `exposeSerial`<sup>Optional</sup> <a name="exposeSerial" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.exposeSerial"></a>

```typescript
public readonly exposeSerial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true` will expose the serial id of the disk attached to the server.

If set to `false` will not expose the serial id. Some operating systems or software solutions require the serial id to be exposed to work properly. Exposing the serial can influence licensed software (e.g. Windows) behavior

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#expose_serial VcpuServer#expose_serial}

---

##### `licenceType`<sup>Optional</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.licenceType"></a>

```typescript
public readonly licenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#licence_type VcpuServer#licence_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

The size of the volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#size VcpuServer#size}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/vcpu_server#user_data VcpuServer#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### VcpuServerLabelList <a name="VcpuServerLabelList" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

new vcpuServer.VcpuServerLabelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.get"></a>

```typescript
public get(index: number): VcpuServerLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VcpuServerLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>[]

---


### VcpuServerLabelOutputReference <a name="VcpuServerLabelOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

new vcpuServer.VcpuServerLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VcpuServerLabel;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel">VcpuServerLabel</a>

---


### VcpuServerNicFirewallList <a name="VcpuServerNicFirewallList" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

new vcpuServer.VcpuServerNicFirewallList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.get"></a>

```typescript
public get(index: number): VcpuServerNicFirewallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VcpuServerNicFirewall[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>[]

---


### VcpuServerNicFirewallOutputReference <a name="VcpuServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

new vcpuServer.VcpuServerNicFirewallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeEnd">resetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeStart">resetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceMac">resetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetTargetIp">resetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPortRangeEnd` <a name="resetPortRangeEnd" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```typescript
public resetPortRangeEnd(): void
```

##### `resetPortRangeStart` <a name="resetPortRangeStart" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeStart"></a>

```typescript
public resetPortRangeStart(): void
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceIp"></a>

```typescript
public resetSourceIp(): void
```

##### `resetSourceMac` <a name="resetSourceMac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceMac"></a>

```typescript
public resetSourceMac(): void
```

##### `resetTargetIp` <a name="resetTargetIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetTargetIp"></a>

```typescript
public resetTargetIp(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEndInput">portRangeEndInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStartInput">portRangeStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMacInput">sourceMacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIpInput">targetIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCode">icmpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpType">icmpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEnd">portRangeEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStart">portRangeStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMac">sourceMac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIp">targetIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: string;
```

- *Type:* string

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portRangeEndInput`<sup>Optional</sup> <a name="portRangeEndInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```typescript
public readonly portRangeEndInput: number;
```

- *Type:* number

---

##### `portRangeStartInput`<sup>Optional</sup> <a name="portRangeStartInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```typescript
public readonly portRangeStartInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIpInput"></a>

```typescript
public readonly sourceIpInput: string;
```

- *Type:* string

---

##### `sourceMacInput`<sup>Optional</sup> <a name="sourceMacInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMacInput"></a>

```typescript
public readonly sourceMacInput: string;
```

- *Type:* string

---

##### `targetIpInput`<sup>Optional</sup> <a name="targetIpInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIpInput"></a>

```typescript
public readonly targetIpInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: string;
```

- *Type:* string

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portRangeEnd`<sup>Required</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEnd"></a>

```typescript
public readonly portRangeEnd: number;
```

- *Type:* number

---

##### `portRangeStart`<sup>Required</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStart"></a>

```typescript
public readonly portRangeStart: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `sourceMac`<sup>Required</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMac"></a>

```typescript
public readonly sourceMac: string;
```

- *Type:* string

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIp"></a>

```typescript
public readonly targetIp: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VcpuServerNicFirewall;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>

---


### VcpuServerNicOutputReference <a name="VcpuServerNicOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

new vcpuServer.VcpuServerNicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.putFirewall">putFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcp">resetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcpv6">resetDhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewall">resetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallActive">resetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallType">resetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6Ips">resetIpv6Ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetMac">resetMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetSecurityGroupsIds">resetSecurityGroupsIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewall` <a name="putFirewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.putFirewall"></a>

```typescript
public putFirewall(value: IResolvable | VcpuServerNicFirewall[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>[]

---

##### `resetDhcp` <a name="resetDhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcp"></a>

```typescript
public resetDhcp(): void
```

##### `resetDhcpv6` <a name="resetDhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcpv6"></a>

```typescript
public resetDhcpv6(): void
```

##### `resetFirewall` <a name="resetFirewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewall"></a>

```typescript
public resetFirewall(): void
```

##### `resetFirewallActive` <a name="resetFirewallActive" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallActive"></a>

```typescript
public resetFirewallActive(): void
```

##### `resetFirewallType` <a name="resetFirewallType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallType"></a>

```typescript
public resetFirewallType(): void
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIps"></a>

```typescript
public resetIps(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetIpv6Ips` <a name="resetIpv6Ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6Ips"></a>

```typescript
public resetIpv6Ips(): void
```

##### `resetMac` <a name="resetMac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetMac"></a>

```typescript
public resetMac(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSecurityGroupsIds` <a name="resetSecurityGroupsIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetSecurityGroupsIds"></a>

```typescript
public resetSecurityGroupsIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList">VcpuServerNicFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.pciSlot">pciSlot</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpInput">dhcpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6Input">dhcpv6Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActiveInput">firewallActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallInput">firewallInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallTypeInput">firewallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipsInput">ipsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6IpsInput">ipv6IpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lanInput">lanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.macInput">macInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.securityGroupsIdsInput">securityGroupsIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6">dhcpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActive">firewallActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallType">firewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6Ips">ipv6Ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lan">lan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.mac">mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.deviceNumber"></a>

```typescript
public readonly deviceNumber: number;
```

- *Type:* number

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewall"></a>

```typescript
public readonly firewall: VcpuServerNicFirewallList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList">VcpuServerNicFirewallList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.pciSlot"></a>

```typescript
public readonly pciSlot: number;
```

- *Type:* number

---

##### `dhcpInput`<sup>Optional</sup> <a name="dhcpInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpInput"></a>

```typescript
public readonly dhcpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dhcpv6Input`<sup>Optional</sup> <a name="dhcpv6Input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6Input"></a>

```typescript
public readonly dhcpv6Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallActiveInput`<sup>Optional</sup> <a name="firewallActiveInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActiveInput"></a>

```typescript
public readonly firewallActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallInput"></a>

```typescript
public readonly firewallInput: IResolvable | VcpuServerNicFirewall[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall">VcpuServerNicFirewall</a>[]

---

##### `firewallTypeInput`<sup>Optional</sup> <a name="firewallTypeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallTypeInput"></a>

```typescript
public readonly firewallTypeInput: string;
```

- *Type:* string

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipsInput"></a>

```typescript
public readonly ipsInput: string[];
```

- *Type:* string[]

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `ipv6IpsInput`<sup>Optional</sup> <a name="ipv6IpsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6IpsInput"></a>

```typescript
public readonly ipv6IpsInput: string[];
```

- *Type:* string[]

---

##### `lanInput`<sup>Optional</sup> <a name="lanInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lanInput"></a>

```typescript
public readonly lanInput: number;
```

- *Type:* number

---

##### `macInput`<sup>Optional</sup> <a name="macInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.macInput"></a>

```typescript
public readonly macInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityGroupsIdsInput`<sup>Optional</sup> <a name="securityGroupsIdsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.securityGroupsIdsInput"></a>

```typescript
public readonly securityGroupsIdsInput: string[];
```

- *Type:* string[]

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dhcpv6`<sup>Required</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6"></a>

```typescript
public readonly dhcpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallActive`<sup>Required</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActive"></a>

```typescript
public readonly firewallActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `ipv6Ips`<sup>Required</sup> <a name="ipv6Ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6Ips"></a>

```typescript
public readonly ipv6Ips: string[];
```

- *Type:* string[]

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lan"></a>

```typescript
public readonly lan: number;
```

- *Type:* number

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VcpuServerNic;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

---


### VcpuServerTimeoutsOutputReference <a name="VcpuServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

new vcpuServer.VcpuServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VcpuServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>

---


### VcpuServerVolumeOutputReference <a name="VcpuServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer"></a>

```typescript
import { vcpuServer } from '@cdktf/provider-ionoscloud'

new vcpuServer.VcpuServerVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBackupUnitId">resetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBus">resetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetExposeSerial">resetExposeSerial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetLicenceType">resetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetBackupUnitId` <a name="resetBackupUnitId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBackupUnitId"></a>

```typescript
public resetBackupUnitId(): void
```

##### `resetBus` <a name="resetBus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBus"></a>

```typescript
public resetBus(): void
```

##### `resetExposeSerial` <a name="resetExposeSerial" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetExposeSerial"></a>

```typescript
public resetExposeSerial(): void
```

##### `resetLicenceType` <a name="resetLicenceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetLicenceType"></a>

```typescript
public resetLicenceType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetUserData"></a>

```typescript
public resetUserData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bootServer">bootServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.cpuHotPlug">cpuHotPlug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotPlug">discVirtioHotPlug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotUnplug">discVirtioHotUnplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotPlug">nicHotPlug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotUnplug">nicHotUnplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.pciSlot">pciSlot</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.ramHotPlug">ramHotPlug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitIdInput">backupUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.busInput">busInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.exposeSerialInput">exposeSerialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceTypeInput">licenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitId">backupUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bus">bus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.exposeSerial">exposeSerial</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceType">licenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootServer`<sup>Required</sup> <a name="bootServer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bootServer"></a>

```typescript
public readonly bootServer: string;
```

- *Type:* string

---

##### `cpuHotPlug`<sup>Required</sup> <a name="cpuHotPlug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.cpuHotPlug"></a>

```typescript
public readonly cpuHotPlug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.deviceNumber"></a>

```typescript
public readonly deviceNumber: number;
```

- *Type:* number

---

##### `discVirtioHotPlug`<sup>Required</sup> <a name="discVirtioHotPlug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```typescript
public readonly discVirtioHotPlug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `discVirtioHotUnplug`<sup>Required</sup> <a name="discVirtioHotUnplug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```typescript
public readonly discVirtioHotUnplug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nicHotPlug`<sup>Required</sup> <a name="nicHotPlug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotPlug"></a>

```typescript
public readonly nicHotPlug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nicHotUnplug`<sup>Required</sup> <a name="nicHotUnplug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotUnplug"></a>

```typescript
public readonly nicHotUnplug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.pciSlot"></a>

```typescript
public readonly pciSlot: number;
```

- *Type:* number

---

##### `ramHotPlug`<sup>Required</sup> <a name="ramHotPlug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.ramHotPlug"></a>

```typescript
public readonly ramHotPlug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `backupUnitIdInput`<sup>Optional</sup> <a name="backupUnitIdInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitIdInput"></a>

```typescript
public readonly backupUnitIdInput: string;
```

- *Type:* string

---

##### `busInput`<sup>Optional</sup> <a name="busInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.busInput"></a>

```typescript
public readonly busInput: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `exposeSerialInput`<sup>Optional</sup> <a name="exposeSerialInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.exposeSerialInput"></a>

```typescript
public readonly exposeSerialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenceTypeInput`<sup>Optional</sup> <a name="licenceTypeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceTypeInput"></a>

```typescript
public readonly licenceTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `backupUnitId`<sup>Required</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitId"></a>

```typescript
public readonly backupUnitId: string;
```

- *Type:* string

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bus"></a>

```typescript
public readonly bus: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `exposeSerial`<sup>Required</sup> <a name="exposeSerial" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.exposeSerial"></a>

```typescript
public readonly exposeSerial: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenceType`<sup>Required</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceType"></a>

```typescript
public readonly licenceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VcpuServerVolume;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

---



