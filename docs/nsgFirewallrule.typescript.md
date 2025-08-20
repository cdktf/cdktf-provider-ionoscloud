# `nsgFirewallrule` Submodule <a name="`nsgFirewallrule` Submodule" id="@cdktf/provider-ionoscloud.nsgFirewallrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NsgFirewallrule <a name="NsgFirewallrule" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule ionoscloud_nsg_firewallrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer"></a>

```typescript
import { nsgFirewallrule } from '@cdktf/provider-ionoscloud'

new nsgFirewallrule.NsgFirewallrule(scope: Construct, id: string, config: NsgFirewallruleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig">NsgFirewallruleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig">NsgFirewallruleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeEnd">resetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeStart">resetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceMac">resetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTargetIp">resetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts"></a>

```typescript
public putTimeouts(value: NsgFirewallruleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

---

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPortRangeEnd` <a name="resetPortRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeEnd"></a>

```typescript
public resetPortRangeEnd(): void
```

##### `resetPortRangeStart` <a name="resetPortRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeStart"></a>

```typescript
public resetPortRangeStart(): void
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceIp"></a>

```typescript
public resetSourceIp(): void
```

##### `resetSourceMac` <a name="resetSourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceMac"></a>

```typescript
public resetSourceMac(): void
```

##### `resetTargetIp` <a name="resetTargetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTargetIp"></a>

```typescript
public resetTargetIp(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NsgFirewallrule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct"></a>

```typescript
import { nsgFirewallrule } from '@cdktf/provider-ionoscloud'

nsgFirewallrule.NsgFirewallrule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement"></a>

```typescript
import { nsgFirewallrule } from '@cdktf/provider-ionoscloud'

nsgFirewallrule.NsgFirewallrule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource"></a>

```typescript
import { nsgFirewallrule } from '@cdktf/provider-ionoscloud'

nsgFirewallrule.NsgFirewallrule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport"></a>

```typescript
import { nsgFirewallrule } from '@cdktf/provider-ionoscloud'

nsgFirewallrule.NsgFirewallrule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NsgFirewallrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NsgFirewallrule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NsgFirewallrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NsgFirewallrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference">NsgFirewallruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCodeInput">icmpCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpTypeInput">icmpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgIdInput">nsgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEndInput">portRangeEndInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStartInput">portRangeStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIpInput">sourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMacInput">sourceMacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIpInput">targetIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCode">icmpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpType">icmpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgId">nsgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEnd">portRangeEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStart">portRangeStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMac">sourceMac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIp">targetIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeouts"></a>

```typescript
public readonly timeouts: NsgFirewallruleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference">NsgFirewallruleTimeoutsOutputReference</a>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: string;
```

- *Type:* string

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nsgIdInput`<sup>Optional</sup> <a name="nsgIdInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgIdInput"></a>

```typescript
public readonly nsgIdInput: string;
```

- *Type:* string

---

##### `portRangeEndInput`<sup>Optional</sup> <a name="portRangeEndInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEndInput"></a>

```typescript
public readonly portRangeEndInput: number;
```

- *Type:* number

---

##### `portRangeStartInput`<sup>Optional</sup> <a name="portRangeStartInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStartInput"></a>

```typescript
public readonly portRangeStartInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIpInput"></a>

```typescript
public readonly sourceIpInput: string;
```

- *Type:* string

---

##### `sourceMacInput`<sup>Optional</sup> <a name="sourceMacInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMacInput"></a>

```typescript
public readonly sourceMacInput: string;
```

- *Type:* string

---

##### `targetIpInput`<sup>Optional</sup> <a name="targetIpInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIpInput"></a>

```typescript
public readonly targetIpInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NsgFirewallruleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCode"></a>

```typescript
public readonly icmpCode: string;
```

- *Type:* string

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nsgId`<sup>Required</sup> <a name="nsgId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgId"></a>

```typescript
public readonly nsgId: string;
```

- *Type:* string

---

##### `portRangeEnd`<sup>Required</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEnd"></a>

```typescript
public readonly portRangeEnd: number;
```

- *Type:* number

---

##### `portRangeStart`<sup>Required</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStart"></a>

```typescript
public readonly portRangeStart: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `sourceMac`<sup>Required</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMac"></a>

```typescript
public readonly sourceMac: string;
```

- *Type:* string

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIp"></a>

```typescript
public readonly targetIp: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NsgFirewallruleConfig <a name="NsgFirewallruleConfig" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.Initializer"></a>

```typescript
import { nsgFirewallrule } from '@cdktf/provider-ionoscloud'

const nsgFirewallruleConfig: nsgFirewallrule.NsgFirewallruleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.nsgId">nsgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpCode">icmpCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpType">icmpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeEnd">portRangeEnd</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeStart">portRangeStart</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceIp">sourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceMac">sourceMac</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.targetIp">targetIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}.

---

##### `nsgId`<sup>Required</sup> <a name="nsgId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.nsgId"></a>

```typescript
public readonly nsgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpCode"></a>

```typescript
public readonly icmpCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}.

---

##### `portRangeEnd`<sup>Optional</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeEnd"></a>

```typescript
public readonly portRangeEnd: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}.

---

##### `portRangeStart`<sup>Optional</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeStart"></a>

```typescript
public readonly portRangeStart: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}.

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}.

---

##### `sourceMac`<sup>Optional</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceMac"></a>

```typescript
public readonly sourceMac: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}.

---

##### `targetIp`<sup>Optional</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.targetIp"></a>

```typescript
public readonly targetIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NsgFirewallruleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#timeouts NsgFirewallrule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}.

---

### NsgFirewallruleTimeouts <a name="NsgFirewallruleTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.Initializer"></a>

```typescript
import { nsgFirewallrule } from '@cdktf/provider-ionoscloud'

const nsgFirewallruleTimeouts: nsgFirewallrule.NsgFirewallruleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#create NsgFirewallrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#default NsgFirewallrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#delete NsgFirewallrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#update NsgFirewallrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#create NsgFirewallrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#default NsgFirewallrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#delete NsgFirewallrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.13/docs/resources/nsg_firewallrule#update NsgFirewallrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NsgFirewallruleTimeoutsOutputReference <a name="NsgFirewallruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer"></a>

```typescript
import { nsgFirewallrule } from '@cdktf/provider-ionoscloud'

new nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NsgFirewallruleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

---



