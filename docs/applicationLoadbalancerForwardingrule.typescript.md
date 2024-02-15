# `applicationLoadbalancerForwardingrule` Submodule <a name="`applicationLoadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadbalancerForwardingrule <a name="ApplicationLoadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule(scope: Construct, id: string, config: ApplicationLoadbalancerForwardingruleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig">ApplicationLoadbalancerForwardingruleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig">ApplicationLoadbalancerForwardingruleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putHttpRules">putHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetClientTimeout">resetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetHttpRules">resetHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetServerCertificates">resetServerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHttpRules` <a name="putHttpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putHttpRules"></a>

```typescript
public putHttpRules(value: IResolvable | ApplicationLoadbalancerForwardingruleHttpRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putHttpRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts"></a>

```typescript
public putTimeouts(value: ApplicationLoadbalancerForwardingruleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>

---

##### `resetClientTimeout` <a name="resetClientTimeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetClientTimeout"></a>

```typescript
public resetClientTimeout(): void
```

##### `resetHttpRules` <a name="resetHttpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetHttpRules"></a>

```typescript
public resetHttpRules(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServerCertificates` <a name="resetServerCertificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetServerCertificates"></a>

```typescript
public resetServerCertificates(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationLoadbalancerForwardingrule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationLoadbalancerForwardingrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadbalancerForwardingrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRules">httpRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList">ApplicationLoadbalancerForwardingruleHttpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference">ApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput">applicationLoadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeoutInput">clientTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRulesInput">httpRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIpInput">listenerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPortInput">listenerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificatesInput">serverCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId">applicationLoadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeout">clientTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIp">listenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificates">serverCertificates</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `httpRules`<sup>Required</sup> <a name="httpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRules"></a>

```typescript
public readonly httpRules: ApplicationLoadbalancerForwardingruleHttpRulesList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList">ApplicationLoadbalancerForwardingruleHttpRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationLoadbalancerForwardingruleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference">ApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `applicationLoadbalancerIdInput`<sup>Optional</sup> <a name="applicationLoadbalancerIdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput"></a>

```typescript
public readonly applicationLoadbalancerIdInput: string;
```

- *Type:* string

---

##### `clientTimeoutInput`<sup>Optional</sup> <a name="clientTimeoutInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeoutInput"></a>

```typescript
public readonly clientTimeoutInput: number;
```

- *Type:* number

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `httpRulesInput`<sup>Optional</sup> <a name="httpRulesInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRulesInput"></a>

```typescript
public readonly httpRulesInput: IResolvable | ApplicationLoadbalancerForwardingruleHttpRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenerIpInput`<sup>Optional</sup> <a name="listenerIpInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIpInput"></a>

```typescript
public readonly listenerIpInput: string;
```

- *Type:* string

---

##### `listenerPortInput`<sup>Optional</sup> <a name="listenerPortInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPortInput"></a>

```typescript
public readonly listenerPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `serverCertificatesInput`<sup>Optional</sup> <a name="serverCertificatesInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificatesInput"></a>

```typescript
public readonly serverCertificatesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApplicationLoadbalancerForwardingruleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>

---

##### `applicationLoadbalancerId`<sup>Required</sup> <a name="applicationLoadbalancerId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId"></a>

```typescript
public readonly applicationLoadbalancerId: string;
```

- *Type:* string

---

##### `clientTimeout`<sup>Required</sup> <a name="clientTimeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeout"></a>

```typescript
public readonly clientTimeout: number;
```

- *Type:* number

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerIp`<sup>Required</sup> <a name="listenerIp" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIp"></a>

```typescript
public readonly listenerIp: string;
```

- *Type:* string

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificates"></a>

```typescript
public readonly serverCertificates: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadbalancerForwardingruleConfig <a name="ApplicationLoadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

const applicationLoadbalancerForwardingruleConfig: applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId">applicationLoadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#application_loadbalancer_id ApplicationLoadbalancerForwardingrule#application_loadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#datacenter_id ApplicationLoadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerIp">listenerIp</a></code> | <code>string</code> | Listening (inbound) IP. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerPort">listenerPort</a></code> | <code>number</code> | Listening (inbound) port number; valid range is 1 to 65535. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.name">name</a></code> | <code>string</code> | The name of the Application Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.protocol">protocol</a></code> | <code>string</code> | Balancing protocol. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.clientTimeout">clientTimeout</a></code> | <code>number</code> | The maximum time in milliseconds to wait for the client to acknowledge or send data; |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.httpRules">httpRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>[]</code> | http_rules block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#id ApplicationLoadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.serverCertificates">serverCertificates</a></code> | <code>string[]</code> | Array of items in the collection. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationLoadbalancerId`<sup>Required</sup> <a name="applicationLoadbalancerId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId"></a>

```typescript
public readonly applicationLoadbalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#application_loadbalancer_id ApplicationLoadbalancerForwardingrule#application_loadbalancer_id}.

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#datacenter_id ApplicationLoadbalancerForwardingrule#datacenter_id}.

---

##### `listenerIp`<sup>Required</sup> <a name="listenerIp" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerIp"></a>

```typescript
public readonly listenerIp: string;
```

- *Type:* string

Listening (inbound) IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#listener_ip ApplicationLoadbalancerForwardingrule#listener_ip}

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

Listening (inbound) port number; valid range is 1 to 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#listener_port ApplicationLoadbalancerForwardingrule#listener_port}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Application Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#name ApplicationLoadbalancerForwardingrule#name}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Balancing protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#protocol ApplicationLoadbalancerForwardingrule#protocol}

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.clientTimeout"></a>

```typescript
public readonly clientTimeout: number;
```

- *Type:* number

The maximum time in milliseconds to wait for the client to acknowledge or send data;

default is 50,000 (50 seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#client_timeout ApplicationLoadbalancerForwardingrule#client_timeout}

---

##### `httpRules`<sup>Optional</sup> <a name="httpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.httpRules"></a>

```typescript
public readonly httpRules: IResolvable | ApplicationLoadbalancerForwardingruleHttpRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>[]

http_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#http_rules ApplicationLoadbalancerForwardingrule#http_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#id ApplicationLoadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverCertificates`<sup>Optional</sup> <a name="serverCertificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.serverCertificates"></a>

```typescript
public readonly serverCertificates: string[];
```

- *Type:* string[]

Array of items in the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#server_certificates ApplicationLoadbalancerForwardingrule#server_certificates}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApplicationLoadbalancerForwardingruleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#timeouts ApplicationLoadbalancerForwardingrule#timeouts}

---

### ApplicationLoadbalancerForwardingruleHttpRules <a name="ApplicationLoadbalancerForwardingruleHttpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

const applicationLoadbalancerForwardingruleHttpRules: applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.name">name</a></code> | <code>string</code> | The unique name of the Application Load Balancer HTTP rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.type">type</a></code> | <code>string</code> | Type of the HTTP rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.contentType">contentType</a></code> | <code>string</code> | Valid only for STATIC actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.dropQuery">dropQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | Default is false; valid only for REDIRECT actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.location">location</a></code> | <code>string</code> | The location for redirecting; mandatory and valid only for REDIRECT actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.responseMessage">responseMessage</a></code> | <code>string</code> | The response message of the request; mandatory for STATIC actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.statusCode">statusCode</a></code> | <code>number</code> | Valid only for REDIRECT and STATIC actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.targetGroup">targetGroup</a></code> | <code>string</code> | The ID of the target group; mandatory and only valid for FORWARD actions. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique name of the Application Load Balancer HTTP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#name ApplicationLoadbalancerForwardingrule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the HTTP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#type ApplicationLoadbalancerForwardingrule#type}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | ApplicationLoadbalancerForwardingruleHttpRulesConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#conditions ApplicationLoadbalancerForwardingrule#conditions}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Valid only for STATIC actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#content_type ApplicationLoadbalancerForwardingrule#content_type}

---

##### `dropQuery`<sup>Optional</sup> <a name="dropQuery" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.dropQuery"></a>

```typescript
public readonly dropQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Default is false; valid only for REDIRECT actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#drop_query ApplicationLoadbalancerForwardingrule#drop_query}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for redirecting; mandatory and valid only for REDIRECT actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#location ApplicationLoadbalancerForwardingrule#location}

---

##### `responseMessage`<sup>Optional</sup> <a name="responseMessage" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.responseMessage"></a>

```typescript
public readonly responseMessage: string;
```

- *Type:* string

The response message of the request; mandatory for STATIC actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#response_message ApplicationLoadbalancerForwardingrule#response_message}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

Valid only for REDIRECT and STATIC actions.

For REDIRECT actions, default is 301 and possible values are 301, 302, 303, 307, and 308. For STATIC actions, default is 503 and valid range is 200 to 599.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#status_code ApplicationLoadbalancerForwardingrule#status_code}

---

##### `targetGroup`<sup>Optional</sup> <a name="targetGroup" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.targetGroup"></a>

```typescript
public readonly targetGroup: string;
```

- *Type:* string

The ID of the target group; mandatory and only valid for FORWARD actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#target_group ApplicationLoadbalancerForwardingrule#target_group}

---

### ApplicationLoadbalancerForwardingruleHttpRulesConditions <a name="ApplicationLoadbalancerForwardingruleHttpRulesConditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

const applicationLoadbalancerForwardingruleHttpRulesConditions: applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.type">type</a></code> | <code>string</code> | Type of the HTTP rule condition. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.condition">condition</a></code> | <code>string</code> | Matching rule for the HTTP rule condition attribute; |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.key">key</a></code> | <code>string</code> | Must be null when type is PATH, METHOD, HOST, or SOURCE_IP. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the condition is negated or not; the default is False. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.value">value</a></code> | <code>string</code> | Mandatory for conditions CONTAINS, EQUALS, MATCHES, STARTS_WITH, ENDS_WITH; |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the HTTP rule condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#type ApplicationLoadbalancerForwardingrule#type}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Matching rule for the HTTP rule condition attribute;

mandatory for HEADER, PATH, QUERY, METHOD, HOST, and COOKIE types; must be null when type is SOURCE_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#condition ApplicationLoadbalancerForwardingrule#condition}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Must be null when type is PATH, METHOD, HOST, or SOURCE_IP.

Key can only be set when type is COOKIES, HEADER, or QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#key ApplicationLoadbalancerForwardingrule#key}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the condition is negated or not; the default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#negate ApplicationLoadbalancerForwardingrule#negate}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Mandatory for conditions CONTAINS, EQUALS, MATCHES, STARTS_WITH, ENDS_WITH;

must be null when condition is EXISTS; should be a valid CIDR if provided and if type is SOURCE_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#value ApplicationLoadbalancerForwardingrule#value}

---

### ApplicationLoadbalancerForwardingruleTimeouts <a name="ApplicationLoadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

const applicationLoadbalancerForwardingruleTimeouts: applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#create ApplicationLoadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#default ApplicationLoadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#delete ApplicationLoadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#update ApplicationLoadbalancerForwardingrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#create ApplicationLoadbalancerForwardingrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#default ApplicationLoadbalancerForwardingrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#delete ApplicationLoadbalancerForwardingrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/application_loadbalancer_forwardingrule#update ApplicationLoadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadbalancerForwardingruleHttpRulesConditionsList <a name="ApplicationLoadbalancerForwardingruleHttpRulesConditionsList" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get"></a>

```typescript
public get(index: number): ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationLoadbalancerForwardingruleHttpRulesConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>[]

---


### ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference <a name="ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationLoadbalancerForwardingruleHttpRulesConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>

---


### ApplicationLoadbalancerForwardingruleHttpRulesList <a name="ApplicationLoadbalancerForwardingruleHttpRulesList" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.get"></a>

```typescript
public get(index: number): ApplicationLoadbalancerForwardingruleHttpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationLoadbalancerForwardingruleHttpRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>[]

---


### ApplicationLoadbalancerForwardingruleHttpRulesOutputReference <a name="ApplicationLoadbalancerForwardingruleHttpRulesOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetDropQuery">resetDropQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetResponseMessage">resetResponseMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetTargetGroup">resetTargetGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | ApplicationLoadbalancerForwardingruleHttpRulesConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>[]

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetDropQuery` <a name="resetDropQuery" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetDropQuery"></a>

```typescript
public resetDropQuery(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetResponseMessage` <a name="resetResponseMessage" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetResponseMessage"></a>

```typescript
public resetResponseMessage(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```

##### `resetTargetGroup` <a name="resetTargetGroup" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetTargetGroup"></a>

```typescript
public resetTargetGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList">ApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQueryInput">dropQueryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessageInput">responseMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery">dropQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage">responseMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup">targetGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: ApplicationLoadbalancerForwardingruleHttpRulesConditionsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList">ApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | ApplicationLoadbalancerForwardingruleHttpRulesConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>[]

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `dropQueryInput`<sup>Optional</sup> <a name="dropQueryInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQueryInput"></a>

```typescript
public readonly dropQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `responseMessageInput`<sup>Optional</sup> <a name="responseMessageInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessageInput"></a>

```typescript
public readonly responseMessageInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroupInput"></a>

```typescript
public readonly targetGroupInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `dropQuery`<sup>Required</sup> <a name="dropQuery" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery"></a>

```typescript
public readonly dropQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `responseMessage`<sup>Required</sup> <a name="responseMessage" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage"></a>

```typescript
public readonly responseMessage: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup"></a>

```typescript
public readonly targetGroup: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationLoadbalancerForwardingruleHttpRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>

---


### ApplicationLoadbalancerForwardingruleTimeoutsOutputReference <a name="ApplicationLoadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```typescript
import { applicationLoadbalancerForwardingrule } from '@cdktf/provider-ionoscloud'

new applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationLoadbalancerForwardingruleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>

---



