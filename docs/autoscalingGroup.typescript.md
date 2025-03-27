# `autoscalingGroup` Submodule <a name="`autoscalingGroup` Submodule" id="@cdktf/provider-ionoscloud.autoscalingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingGroup <a name="AutoscalingGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group ionoscloud_autoscaling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroup(scope: Construct, id: string, config: AutoscalingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig">AutoscalingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig">AutoscalingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration">putReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy"></a>

```typescript
public putPolicy(value: AutoscalingGroupPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

---

##### `putReplicaConfiguration` <a name="putReplicaConfiguration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration"></a>

```typescript
public putReplicaConfiguration(value: AutoscalingGroupReplicaConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putReplicaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: AutoscalingGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isConstruct"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

autoscalingGroup.AutoscalingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformElement"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

autoscalingGroup.AutoscalingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformResource"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

autoscalingGroup.AutoscalingGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

autoscalingGroup.AutoscalingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoscalingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoscalingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference">AutoscalingGroupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfiguration">replicaConfiguration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference">AutoscalingGroupReplicaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCountInput">maxReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCountInput">minReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policyInput">policyInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfigurationInput">replicaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policy"></a>

```typescript
public readonly policy: AutoscalingGroupPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference">AutoscalingGroupPolicyOutputReference</a>

---

##### `replicaConfiguration`<sup>Required</sup> <a name="replicaConfiguration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfiguration"></a>

```typescript
public readonly replicaConfiguration: AutoscalingGroupReplicaConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference">AutoscalingGroupReplicaConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeouts"></a>

```typescript
public readonly timeouts: AutoscalingGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference">AutoscalingGroupTimeoutsOutputReference</a>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxReplicaCountInput`<sup>Optional</sup> <a name="maxReplicaCountInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCountInput"></a>

```typescript
public readonly maxReplicaCountInput: number;
```

- *Type:* number

---

##### `minReplicaCountInput`<sup>Optional</sup> <a name="minReplicaCountInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCountInput"></a>

```typescript
public readonly minReplicaCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.policyInput"></a>

```typescript
public readonly policyInput: AutoscalingGroupPolicy;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

---

##### `replicaConfigurationInput`<sup>Optional</sup> <a name="replicaConfigurationInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.replicaConfigurationInput"></a>

```typescript
public readonly replicaConfigurationInput: AutoscalingGroupReplicaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutoscalingGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingGroupConfig <a name="AutoscalingGroupConfig" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupConfig: autoscalingGroup.AutoscalingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | Unique identifier for the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.maxReplicaCount">maxReplicaCount</a></code> | <code>number</code> | The maximum value for the number of replicas on a VM Auto Scaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.minReplicaCount">minReplicaCount</a></code> | <code>number</code> | The minimum value for the number of replicas on a VM Auto Scaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.name">name</a></code> | <code>string</code> | User-defined name for the Autoscaling Group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | policy block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.replicaConfiguration">replicaConfiguration</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#id AutoscalingGroup#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

Unique identifier for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#datacenter_id AutoscalingGroup#datacenter_id}

---

##### `maxReplicaCount`<sup>Required</sup> <a name="maxReplicaCount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.maxReplicaCount"></a>

```typescript
public readonly maxReplicaCount: number;
```

- *Type:* number

The maximum value for the number of replicas on a VM Auto Scaling Group.

Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#max_replica_count AutoscalingGroup#max_replica_count}

---

##### `minReplicaCount`<sup>Required</sup> <a name="minReplicaCount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.minReplicaCount"></a>

```typescript
public readonly minReplicaCount: number;
```

- *Type:* number

The minimum value for the number of replicas on a VM Auto Scaling Group.

Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#min_replica_count AutoscalingGroup#min_replica_count}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User-defined name for the Autoscaling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.policy"></a>

```typescript
public readonly policy: AutoscalingGroupPolicy;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#policy AutoscalingGroup#policy}

---

##### `replicaConfiguration`<sup>Required</sup> <a name="replicaConfiguration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.replicaConfiguration"></a>

```typescript
public readonly replicaConfiguration: AutoscalingGroupReplicaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#replica_configuration AutoscalingGroup#replica_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#id AutoscalingGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutoscalingGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#timeouts AutoscalingGroup#timeouts}

---

### AutoscalingGroupPolicy <a name="AutoscalingGroupPolicy" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupPolicy: autoscalingGroup.AutoscalingGroupPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.metric">metric</a></code> | <code>string</code> | The Metric that should trigger the scaling actions. Metric values are checked at fixed intervals. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInAction">scaleInAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a></code> | scale_in_action block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInThreshold">scaleInThreshold</a></code> | <code>number</code> | The upper threshold for the value of the 'metric'. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutAction">scaleOutAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a></code> | scale_out_action block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutThreshold">scaleOutThreshold</a></code> | <code>number</code> | The upper threshold for the value of the 'metric'. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.unit">unit</a></code> | <code>string</code> | Units of the applied Metric. Possible values are: PER_HOUR, PER_MINUTE, PER_SECOND, TOTAL. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.range">range</a></code> | <code>string</code> | Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes. |

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

The Metric that should trigger the scaling actions. Metric values are checked at fixed intervals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#metric AutoscalingGroup#metric}

---

##### `scaleInAction`<sup>Required</sup> <a name="scaleInAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInAction"></a>

```typescript
public readonly scaleInAction: AutoscalingGroupPolicyScaleInAction;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

scale_in_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#scale_in_action AutoscalingGroup#scale_in_action}

---

##### `scaleInThreshold`<sup>Required</sup> <a name="scaleInThreshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleInThreshold"></a>

```typescript
public readonly scaleInThreshold: number;
```

- *Type:* number

The upper threshold for the value of the 'metric'.

Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scale_out_action' property. The value must have a lower minimum delta to the 'scale_in_threshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#scale_in_threshold AutoscalingGroup#scale_in_threshold}

---

##### `scaleOutAction`<sup>Required</sup> <a name="scaleOutAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutAction"></a>

```typescript
public readonly scaleOutAction: AutoscalingGroupPolicyScaleOutAction;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

scale_out_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#scale_out_action AutoscalingGroup#scale_out_action}

---

##### `scaleOutThreshold`<sup>Required</sup> <a name="scaleOutThreshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.scaleOutThreshold"></a>

```typescript
public readonly scaleOutThreshold: number;
```

- *Type:* number

The upper threshold for the value of the 'metric'.

Used with the 'greater than' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the 'scaleOutAction' property. The value must have a lower minimum delta to the 'scaleInThreshold', depending on the metric, to avoid competing for actions simultaneously. If 'properties.policy.unit=TOTAL', a value >= 40 must be chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#scale_out_threshold AutoscalingGroup#scale_out_threshold}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Units of the applied Metric. Possible values are: PER_HOUR, PER_MINUTE, PER_SECOND, TOTAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#unit AutoscalingGroup#unit}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#range AutoscalingGroup#range}

---

### AutoscalingGroupPolicyScaleInAction <a name="AutoscalingGroupPolicyScaleInAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupPolicyScaleInAction: autoscalingGroup.AutoscalingGroupPolicyScaleInAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amount">amount</a></code> | <code>number</code> | When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are removed. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amountType">amountType</a></code> | <code>string</code> | The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE]. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.deleteVolumes">deleteVolumes</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to 'true', when deleting an replica during scale in, any attached volume will also be deleted. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.cooldownPeriod">cooldownPeriod</a></code> | <code>string</code> | The minimum time that elapses after the start of this scaling action until the following scaling action is started. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.terminationPolicyType">terminationPolicyType</a></code> | <code>string</code> | The type of termination policy for the VM Auto Scaling Group to follow a specific pattern for scaling-in replicas. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are removed.

The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always removed. Note that for 'SCALE_IN' operations, volumes are not deleted after the server is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}

---

##### `amountType`<sup>Required</sup> <a name="amountType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.amountType"></a>

```typescript
public readonly amountType: string;
```

- *Type:* string

The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}

---

##### `deleteVolumes`<sup>Required</sup> <a name="deleteVolumes" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.deleteVolumes"></a>

```typescript
public readonly deleteVolumes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to 'true', when deleting an replica during scale in, any attached volume will also be deleted.

When set to 'false', all volumes remain in the datacenter and must be deleted manually. Note that every scale-out creates new volumes. When they are not deleted, they will eventually use all of your contracts resource limits. At this point, scaling out would not be possible anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#delete_volumes AutoscalingGroup#delete_volumes}

---

##### `cooldownPeriod`<sup>Optional</sup> <a name="cooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.cooldownPeriod"></a>

```typescript
public readonly cooldownPeriod: string;
```

- *Type:* string

The minimum time that elapses after the start of this scaling action until the following scaling action is started.

While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}

---

##### `terminationPolicyType`<sup>Optional</sup> <a name="terminationPolicyType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction.property.terminationPolicyType"></a>

```typescript
public readonly terminationPolicyType: string;
```

- *Type:* string

The type of termination policy for the VM Auto Scaling Group to follow a specific pattern for scaling-in replicas.

The default termination policy is 'OLDEST_SERVER_FIRST'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#termination_policy_type AutoscalingGroup#termination_policy_type}

---

### AutoscalingGroupPolicyScaleOutAction <a name="AutoscalingGroupPolicyScaleOutAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupPolicyScaleOutAction: autoscalingGroup.AutoscalingGroupPolicyScaleOutAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amount">amount</a></code> | <code>number</code> | When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are added. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amountType">amountType</a></code> | <code>string</code> | The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE]. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.cooldownPeriod">cooldownPeriod</a></code> | <code>string</code> | The minimum time that elapses after the start of this scaling action until the following scaling action is started. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

When 'amountType=ABSOLUTE' specifies the absolute number of VMs that are added.

The value must be between 1 to 10. 'amountType=PERCENTAGE' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200. At least one VM is always added or removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#amount AutoscalingGroup#amount}

---

##### `amountType`<sup>Required</sup> <a name="amountType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.amountType"></a>

```typescript
public readonly amountType: string;
```

- *Type:* string

The type for the given amount. Possible values are: [ABSOLUTE, PERCENTAGE].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#amount_type AutoscalingGroup#amount_type}

---

##### `cooldownPeriod`<sup>Optional</sup> <a name="cooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction.property.cooldownPeriod"></a>

```typescript
public readonly cooldownPeriod: string;
```

- *Type:* string

The minimum time that elapses after the start of this scaling action until the following scaling action is started.

While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#cooldown_period AutoscalingGroup#cooldown_period}

---

### AutoscalingGroupReplicaConfiguration <a name="AutoscalingGroupReplicaConfiguration" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupReplicaConfiguration: autoscalingGroup.AutoscalingGroupReplicaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The zone where the VMs are created using this configuration. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cores">cores</a></code> | <code>number</code> | The total number of cores for the VMs. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.ram">ram</a></code> | <code>number</code> | The amount of memory for the VMs in MB, e.g. 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cpuFamily">cpuFamily</a></code> | <code>string</code> | The zone where the VMs are created using this configuration. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.nic">nic</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>[]</code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.volume">volume</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>[]</code> | volume block. |

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The zone where the VMs are created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#availability_zone AutoscalingGroup#availability_zone}

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

The total number of cores for the VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#cores AutoscalingGroup#cores}

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

The amount of memory for the VMs in MB, e.g. 2048. Size must be specified in multiples of 256 MB with a minimum of 256 MB; however, if you set ramHotPlug to TRUE then you must use a minimum of 1024 MB. If you set the RAM size more than 240GB, then ramHotPlug will be set to FALSE and can not be set to TRUE unless RAM size not set to less than 240GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#ram AutoscalingGroup#ram}

---

##### `cpuFamily`<sup>Optional</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.cpuFamily"></a>

```typescript
public readonly cpuFamily: string;
```

- *Type:* string

The zone where the VMs are created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#cpu_family AutoscalingGroup#cpu_family}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.nic"></a>

```typescript
public readonly nic: IResolvable | AutoscalingGroupReplicaConfigurationNic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>[]

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#nic AutoscalingGroup#nic}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration.property.volume"></a>

```typescript
public readonly volume: IResolvable | AutoscalingGroupReplicaConfigurationVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#volume AutoscalingGroup#volume}

---

### AutoscalingGroupReplicaConfigurationNic <a name="AutoscalingGroupReplicaConfigurationNic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupReplicaConfigurationNic: autoscalingGroup.AutoscalingGroupReplicaConfigurationNic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.lan">lan</a></code> | <code>number</code> | Lan ID for this replica Nic. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.name">name</a></code> | <code>string</code> | Name for this replica NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Dhcp flag for this replica Nic. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallActive">firewallActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Activate or deactivate the firewall. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallRule">firewallRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule">AutoscalingGroupReplicaConfigurationNicFirewallRule</a>[]</code> | firewall_rule block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallType">firewallType</a></code> | <code>string</code> | The type of firewall rules that will be allowed on the NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.flowLog">flowLog</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog">AutoscalingGroupReplicaConfigurationNicFlowLog</a>[]</code> | flow_log block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a></code> | target_group block. |

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.lan"></a>

```typescript
public readonly lan: number;
```

- *Type:* number

Lan ID for this replica Nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#lan AutoscalingGroup#lan}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for this replica NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Dhcp flag for this replica Nic.

This is an optional attribute with default value of 'true' if not given in the request payload or given as null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#dhcp AutoscalingGroup#dhcp}

---

##### `firewallActive`<sup>Optional</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallActive"></a>

```typescript
public readonly firewallActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Activate or deactivate the firewall.

By default, an active firewall without any defined rules will block all incoming network traffic except for the firewall rules that explicitly allows certain protocols, IP addresses and ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#firewall_active AutoscalingGroup#firewall_active}

---

##### `firewallRule`<sup>Optional</sup> <a name="firewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallRule"></a>

```typescript
public readonly firewallRule: IResolvable | AutoscalingGroupReplicaConfigurationNicFirewallRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule">AutoscalingGroupReplicaConfigurationNicFirewallRule</a>[]

firewall_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#firewall_rule AutoscalingGroup#firewall_rule}

---

##### `firewallType`<sup>Optional</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

The type of firewall rules that will be allowed on the NIC.

If not specified, the default INGRESS value is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#firewall_type AutoscalingGroup#firewall_type}

---

##### `flowLog`<sup>Optional</sup> <a name="flowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.flowLog"></a>

```typescript
public readonly flowLog: IResolvable | AutoscalingGroupReplicaConfigurationNicFlowLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog">AutoscalingGroupReplicaConfigurationNicFlowLog</a>[]

flow_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#flow_log AutoscalingGroup#flow_log}

---

##### `targetGroup`<sup>Optional</sup> <a name="targetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic.property.targetGroup"></a>

```typescript
public readonly targetGroup: AutoscalingGroupReplicaConfigurationNicTargetGroup;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a>

target_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#target_group AutoscalingGroup#target_group}

---

### AutoscalingGroupReplicaConfigurationNicFirewallRule <a name="AutoscalingGroupReplicaConfigurationNicFirewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupReplicaConfigurationNicFirewallRule: autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.protocol">protocol</a></code> | <code>string</code> | The protocol for the rule. The property cannot be modified after its creation (not allowed in update requests). |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.icmpCode">icmpCode</a></code> | <code>number</code> | Sets the allowed code (from 0 to 254) when ICMP protocol is selected. The value 'null' allows all codes. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.icmpType">icmpType</a></code> | <code>number</code> | Sets the allowed type (from 0 to 254) if the protocol ICMP is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.name">name</a></code> | <code>string</code> | The name of the firewall rule. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.portRangeEnd">portRangeEnd</a></code> | <code>number</code> | Sets the end range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.portRangeStart">portRangeStart</a></code> | <code>number</code> | Sets the initial range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.sourceIp">sourceIp</a></code> | <code>string</code> | Only traffic originating from the respective IPv4 address is permitted. The value 'null' allows traffic from any IP address. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.sourceMac">sourceMac</a></code> | <code>string</code> | Only traffic originating from the respective MAC address is permitted. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.targetIp">targetIp</a></code> | <code>string</code> | If the target NIC has multiple IP addresses, only the traffic directed to the respective IP address of the NIC is allowed. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.type">type</a></code> | <code>string</code> | The firewall rule type. If not specified, the default value 'INGRESS' is used. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol for the rule. The property cannot be modified after its creation (not allowed in update requests).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#protocol AutoscalingGroup#protocol}

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

Sets the allowed code (from 0 to 254) when ICMP protocol is selected. The value 'null' allows all codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#icmp_code AutoscalingGroup#icmp_code}

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

Sets the allowed type (from 0 to 254) if the protocol ICMP is selected.

The value 'null' allows all types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#icmp_type AutoscalingGroup#icmp_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `portRangeEnd`<sup>Optional</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.portRangeEnd"></a>

```typescript
public readonly portRangeEnd: number;
```

- *Type:* number

Sets the end range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected.

The value 'null' for 'port_range_start' and 'port_range_end' allows all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#port_range_end AutoscalingGroup#port_range_end}

---

##### `portRangeStart`<sup>Optional</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.portRangeStart"></a>

```typescript
public readonly portRangeStart: number;
```

- *Type:* number

Sets the initial range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected.

The value 'null' for 'port_range_start' and 'port_range_end' allows all ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#port_range_start AutoscalingGroup#port_range_start}

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

Only traffic originating from the respective IPv4 address is permitted. The value 'null' allows traffic from any IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#source_ip AutoscalingGroup#source_ip}

---

##### `sourceMac`<sup>Optional</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.sourceMac"></a>

```typescript
public readonly sourceMac: string;
```

- *Type:* string

Only traffic originating from the respective MAC address is permitted.

Valid format: 'aa:bb:cc:dd:ee:ff'. The value 'null' allows traffic from any MAC address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#source_mac AutoscalingGroup#source_mac}

---

##### `targetIp`<sup>Optional</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.targetIp"></a>

```typescript
public readonly targetIp: string;
```

- *Type:* string

If the target NIC has multiple IP addresses, only the traffic directed to the respective IP address of the NIC is allowed.

The value 'null' allows traffic to any target IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#target_ip AutoscalingGroup#target_ip}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The firewall rule type. If not specified, the default value 'INGRESS' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#type AutoscalingGroup#type}

---

### AutoscalingGroupReplicaConfigurationNicFlowLog <a name="AutoscalingGroupReplicaConfigurationNicFlowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupReplicaConfigurationNicFlowLog: autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.action">action</a></code> | <code>string</code> | Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.bucket">bucket</a></code> | <code>string</code> | The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.direction">direction</a></code> | <code>string</code> | Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.name">name</a></code> | <code>string</code> | The resource name. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#action AutoscalingGroup#action}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The bucket name of an existing IONOS Object Storage bucket. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#bucket AutoscalingGroup#bucket}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#direction AutoscalingGroup#direction}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

### AutoscalingGroupReplicaConfigurationNicTargetGroup <a name="AutoscalingGroupReplicaConfigurationNicTargetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupReplicaConfigurationNicTargetGroup: autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.port">port</a></code> | <code>number</code> | The port for the target group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The ID of the target group. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.weight">weight</a></code> | <code>number</code> | The weight for the target group. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port for the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#port AutoscalingGroup#port}

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The ID of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#target_group_id AutoscalingGroup#target_group_id}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The weight for the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#weight AutoscalingGroup#weight}

---

### AutoscalingGroupReplicaConfigurationVolume <a name="AutoscalingGroupReplicaConfigurationVolume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupReplicaConfigurationVolume: autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bootOrder">bootOrder</a></code> | <code>string</code> | Determines whether the volume will be used as a boot volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.name">name</a></code> | <code>string</code> | Name for this replica volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.size">size</a></code> | <code>number</code> | User-defined size for this replica volume in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.type">type</a></code> | <code>string</code> | Storage Type for this replica volume. Possible values: SSD, HDD, SSD_STANDARD or SSD_PREMIUM. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.backupUnitId">backupUnitId</a></code> | <code>string</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bus">bus</a></code> | <code>string</code> | The bus type of the volume. Default setting is 'VIRTIO'. The bus type 'IDE' is also supported. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.image">image</a></code> | <code>string</code> | The image installed on the disk. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imageAlias">imageAlias</a></code> | <code>string</code> | The image installed on the volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imagePassword">imagePassword</a></code> | <code>string</code> | Image password for this replica volume. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#ssh_keys AutoscalingGroup#ssh_keys}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.userData">userData</a></code> | <code>string</code> | User-data (Cloud Init) for this replica volume. |

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bootOrder"></a>

```typescript
public readonly bootOrder: string;
```

- *Type:* string

Determines whether the volume will be used as a boot volume.

Set to NONE, the volume will not be used as boot volume. 
Set to PRIMARY, the volume will be used as boot volume and set to AUTO will delegate the decision to the provisioning engine to decide whether to use the volume as boot volume.
Notice that exactly one volume can be set to PRIMARY or all of them set to AUTO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#boot_order AutoscalingGroup#boot_order}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for this replica volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#name AutoscalingGroup#name}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

User-defined size for this replica volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#size AutoscalingGroup#size}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Storage Type for this replica volume. Possible values: SSD, HDD, SSD_STANDARD or SSD_PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#type AutoscalingGroup#type}

---

##### `backupUnitId`<sup>Optional</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.backupUnitId"></a>

```typescript
public readonly backupUnitId: string;
```

- *Type:* string

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#backup_unit_id AutoscalingGroup#backup_unit_id}

---

##### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.bus"></a>

```typescript
public readonly bus: string;
```

- *Type:* string

The bus type of the volume. Default setting is 'VIRTIO'. The bus type 'IDE' is also supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#bus AutoscalingGroup#bus}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The image installed on the disk.

Currently, only the UUID of the image is supported. Note that either 'image' or 'imageAlias' must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#image AutoscalingGroup#image}

---

##### `imageAlias`<sup>Optional</sup> <a name="imageAlias" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imageAlias"></a>

```typescript
public readonly imageAlias: string;
```

- *Type:* string

The image installed on the volume.

Must be an 'imageAlias' as specified via the images API. Note that one of 'image' or 'imageAlias' must be set, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#image_alias AutoscalingGroup#image_alias}

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.imagePassword"></a>

```typescript
public readonly imagePassword: string;
```

- *Type:* string

Image password for this replica volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#image_password AutoscalingGroup#image_password}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#ssh_keys AutoscalingGroup#ssh_keys}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

User-data (Cloud Init) for this replica volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#user_data AutoscalingGroup#user_data}

---

### AutoscalingGroupTimeouts <a name="AutoscalingGroupTimeouts" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

const autoscalingGroupTimeouts: autoscalingGroup.AutoscalingGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#create AutoscalingGroup#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#default AutoscalingGroup#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#update AutoscalingGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#create AutoscalingGroup#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#default AutoscalingGroup#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.4/docs/resources/autoscaling_group#update AutoscalingGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingGroupPolicyOutputReference <a name="AutoscalingGroupPolicyOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction">putScaleInAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction">putScaleOutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resetRange">resetRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaleInAction` <a name="putScaleInAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction"></a>

```typescript
public putScaleInAction(value: AutoscalingGroupPolicyScaleInAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleInAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

---

##### `putScaleOutAction` <a name="putScaleOutAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction"></a>

```typescript
public putScaleOutAction(value: AutoscalingGroupPolicyScaleOutAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.putScaleOutAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInAction">scaleInAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference">AutoscalingGroupPolicyScaleInActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutAction">scaleOutAction</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference">AutoscalingGroupPolicyScaleOutActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.rangeInput">rangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInActionInput">scaleInActionInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThresholdInput">scaleInThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutActionInput">scaleOutActionInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThresholdInput">scaleOutThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.range">range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThreshold">scaleInThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThreshold">scaleOutThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInAction`<sup>Required</sup> <a name="scaleInAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInAction"></a>

```typescript
public readonly scaleInAction: AutoscalingGroupPolicyScaleInActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference">AutoscalingGroupPolicyScaleInActionOutputReference</a>

---

##### `scaleOutAction`<sup>Required</sup> <a name="scaleOutAction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutAction"></a>

```typescript
public readonly scaleOutAction: AutoscalingGroupPolicyScaleOutActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference">AutoscalingGroupPolicyScaleOutActionOutputReference</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: string;
```

- *Type:* string

---

##### `scaleInActionInput`<sup>Optional</sup> <a name="scaleInActionInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInActionInput"></a>

```typescript
public readonly scaleInActionInput: AutoscalingGroupPolicyScaleInAction;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

---

##### `scaleInThresholdInput`<sup>Optional</sup> <a name="scaleInThresholdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThresholdInput"></a>

```typescript
public readonly scaleInThresholdInput: number;
```

- *Type:* number

---

##### `scaleOutActionInput`<sup>Optional</sup> <a name="scaleOutActionInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutActionInput"></a>

```typescript
public readonly scaleOutActionInput: AutoscalingGroupPolicyScaleOutAction;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

---

##### `scaleOutThresholdInput`<sup>Optional</sup> <a name="scaleOutThresholdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThresholdInput"></a>

```typescript
public readonly scaleOutThresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

---

##### `scaleInThreshold`<sup>Required</sup> <a name="scaleInThreshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleInThreshold"></a>

```typescript
public readonly scaleInThreshold: number;
```

- *Type:* number

---

##### `scaleOutThreshold`<sup>Required</sup> <a name="scaleOutThreshold" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.scaleOutThreshold"></a>

```typescript
public readonly scaleOutThreshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupPolicy;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicy">AutoscalingGroupPolicy</a>

---


### AutoscalingGroupPolicyScaleInActionOutputReference <a name="AutoscalingGroupPolicyScaleInActionOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetCooldownPeriod">resetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetTerminationPolicyType">resetTerminationPolicyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCooldownPeriod` <a name="resetCooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetCooldownPeriod"></a>

```typescript
public resetCooldownPeriod(): void
```

##### `resetTerminationPolicyType` <a name="resetTerminationPolicyType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.resetTerminationPolicyType"></a>

```typescript
public resetTerminationPolicyType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountTypeInput">amountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriodInput">cooldownPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumesInput">deleteVolumesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyTypeInput">terminationPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountType">amountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod">cooldownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes">deleteVolumes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType">terminationPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `amountTypeInput`<sup>Optional</sup> <a name="amountTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountTypeInput"></a>

```typescript
public readonly amountTypeInput: string;
```

- *Type:* string

---

##### `cooldownPeriodInput`<sup>Optional</sup> <a name="cooldownPeriodInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriodInput"></a>

```typescript
public readonly cooldownPeriodInput: string;
```

- *Type:* string

---

##### `deleteVolumesInput`<sup>Optional</sup> <a name="deleteVolumesInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumesInput"></a>

```typescript
public readonly deleteVolumesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `terminationPolicyTypeInput`<sup>Optional</sup> <a name="terminationPolicyTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyTypeInput"></a>

```typescript
public readonly terminationPolicyTypeInput: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `amountType`<sup>Required</sup> <a name="amountType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.amountType"></a>

```typescript
public readonly amountType: string;
```

- *Type:* string

---

##### `cooldownPeriod`<sup>Required</sup> <a name="cooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.cooldownPeriod"></a>

```typescript
public readonly cooldownPeriod: string;
```

- *Type:* string

---

##### `deleteVolumes`<sup>Required</sup> <a name="deleteVolumes" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.deleteVolumes"></a>

```typescript
public readonly deleteVolumes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `terminationPolicyType`<sup>Required</sup> <a name="terminationPolicyType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.terminationPolicyType"></a>

```typescript
public readonly terminationPolicyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupPolicyScaleInAction;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleInAction">AutoscalingGroupPolicyScaleInAction</a>

---


### AutoscalingGroupPolicyScaleOutActionOutputReference <a name="AutoscalingGroupPolicyScaleOutActionOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resetCooldownPeriod">resetCooldownPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCooldownPeriod` <a name="resetCooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.resetCooldownPeriod"></a>

```typescript
public resetCooldownPeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountTypeInput">amountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriodInput">cooldownPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType">amountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod">cooldownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `amountTypeInput`<sup>Optional</sup> <a name="amountTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountTypeInput"></a>

```typescript
public readonly amountTypeInput: string;
```

- *Type:* string

---

##### `cooldownPeriodInput`<sup>Optional</sup> <a name="cooldownPeriodInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriodInput"></a>

```typescript
public readonly cooldownPeriodInput: string;
```

- *Type:* string

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `amountType`<sup>Required</sup> <a name="amountType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.amountType"></a>

```typescript
public readonly amountType: string;
```

- *Type:* string

---

##### `cooldownPeriod`<sup>Required</sup> <a name="cooldownPeriod" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.cooldownPeriod"></a>

```typescript
public readonly cooldownPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupPolicyScaleOutAction;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupPolicyScaleOutAction">AutoscalingGroupPolicyScaleOutAction</a>

---


### AutoscalingGroupReplicaConfigurationNicFirewallRuleList <a name="AutoscalingGroupReplicaConfigurationNicFirewallRuleList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.get"></a>

```typescript
public get(index: number): AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule">AutoscalingGroupReplicaConfigurationNicFirewallRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupReplicaConfigurationNicFirewallRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule">AutoscalingGroupReplicaConfigurationNicFirewallRule</a>[]

---


### AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference <a name="AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetPortRangeEnd">resetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetPortRangeStart">resetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetSourceMac">resetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetTargetIp">resetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPortRangeEnd` <a name="resetPortRangeEnd" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetPortRangeEnd"></a>

```typescript
public resetPortRangeEnd(): void
```

##### `resetPortRangeStart` <a name="resetPortRangeStart" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetPortRangeStart"></a>

```typescript
public resetPortRangeStart(): void
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetSourceIp"></a>

```typescript
public resetSourceIp(): void
```

##### `resetSourceMac` <a name="resetSourceMac" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetSourceMac"></a>

```typescript
public resetSourceMac(): void
```

##### `resetTargetIp` <a name="resetTargetIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetTargetIp"></a>

```typescript
public resetTargetIp(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEndInput">portRangeEndInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStartInput">portRangeStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMacInput">sourceMacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIpInput">targetIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCode">icmpCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpType">icmpType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEnd">portRangeEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStart">portRangeStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMac">sourceMac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIp">targetIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule">AutoscalingGroupReplicaConfigurationNicFirewallRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: number;
```

- *Type:* number

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portRangeEndInput`<sup>Optional</sup> <a name="portRangeEndInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEndInput"></a>

```typescript
public readonly portRangeEndInput: number;
```

- *Type:* number

---

##### `portRangeStartInput`<sup>Optional</sup> <a name="portRangeStartInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStartInput"></a>

```typescript
public readonly portRangeStartInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIpInput"></a>

```typescript
public readonly sourceIpInput: string;
```

- *Type:* string

---

##### `sourceMacInput`<sup>Optional</sup> <a name="sourceMacInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMacInput"></a>

```typescript
public readonly sourceMacInput: string;
```

- *Type:* string

---

##### `targetIpInput`<sup>Optional</sup> <a name="targetIpInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIpInput"></a>

```typescript
public readonly targetIpInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portRangeEnd`<sup>Required</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeEnd"></a>

```typescript
public readonly portRangeEnd: number;
```

- *Type:* number

---

##### `portRangeStart`<sup>Required</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.portRangeStart"></a>

```typescript
public readonly portRangeStart: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `sourceMac`<sup>Required</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.sourceMac"></a>

```typescript
public readonly sourceMac: string;
```

- *Type:* string

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.targetIp"></a>

```typescript
public readonly targetIp: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupReplicaConfigurationNicFirewallRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule">AutoscalingGroupReplicaConfigurationNicFirewallRule</a>

---


### AutoscalingGroupReplicaConfigurationNicFlowLogList <a name="AutoscalingGroupReplicaConfigurationNicFlowLogList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.get"></a>

```typescript
public get(index: number): AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog">AutoscalingGroupReplicaConfigurationNicFlowLog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupReplicaConfigurationNicFlowLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog">AutoscalingGroupReplicaConfigurationNicFlowLog</a>[]

---


### AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference <a name="AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog">AutoscalingGroupReplicaConfigurationNicFlowLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupReplicaConfigurationNicFlowLog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog">AutoscalingGroupReplicaConfigurationNicFlowLog</a>

---


### AutoscalingGroupReplicaConfigurationNicList <a name="AutoscalingGroupReplicaConfigurationNicList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.get"></a>

```typescript
public get(index: number): AutoscalingGroupReplicaConfigurationNicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupReplicaConfigurationNic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>[]

---


### AutoscalingGroupReplicaConfigurationNicOutputReference <a name="AutoscalingGroupReplicaConfigurationNicOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFirewallRule">putFirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFlowLog">putFlowLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putTargetGroup">putTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetDhcp">resetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallActive">resetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallRule">resetFirewallRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallType">resetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFlowLog">resetFlowLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetTargetGroup">resetTargetGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewallRule` <a name="putFirewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFirewallRule"></a>

```typescript
public putFirewallRule(value: IResolvable | AutoscalingGroupReplicaConfigurationNicFirewallRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFirewallRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule">AutoscalingGroupReplicaConfigurationNicFirewallRule</a>[]

---

##### `putFlowLog` <a name="putFlowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFlowLog"></a>

```typescript
public putFlowLog(value: IResolvable | AutoscalingGroupReplicaConfigurationNicFlowLog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putFlowLog.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog">AutoscalingGroupReplicaConfigurationNicFlowLog</a>[]

---

##### `putTargetGroup` <a name="putTargetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putTargetGroup"></a>

```typescript
public putTargetGroup(value: AutoscalingGroupReplicaConfigurationNicTargetGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a>

---

##### `resetDhcp` <a name="resetDhcp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetDhcp"></a>

```typescript
public resetDhcp(): void
```

##### `resetFirewallActive` <a name="resetFirewallActive" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallActive"></a>

```typescript
public resetFirewallActive(): void
```

##### `resetFirewallRule` <a name="resetFirewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallRule"></a>

```typescript
public resetFirewallRule(): void
```

##### `resetFirewallType` <a name="resetFirewallType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFirewallType"></a>

```typescript
public resetFirewallType(): void
```

##### `resetFlowLog` <a name="resetFlowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetFlowLog"></a>

```typescript
public resetFlowLog(): void
```

##### `resetTargetGroup` <a name="resetTargetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.resetTargetGroup"></a>

```typescript
public resetTargetGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRule">firewallRule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList">AutoscalingGroupReplicaConfigurationNicFirewallRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLog">flowLog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList">AutoscalingGroupReplicaConfigurationNicFlowLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference">AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcpInput">dhcpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActiveInput">firewallActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRuleInput">firewallRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule">AutoscalingGroupReplicaConfigurationNicFirewallRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallTypeInput">firewallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLogInput">flowLogInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog">AutoscalingGroupReplicaConfigurationNicFlowLog</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lanInput">lanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActive">firewallActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallType">firewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lan">lan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firewallRule`<sup>Required</sup> <a name="firewallRule" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRule"></a>

```typescript
public readonly firewallRule: AutoscalingGroupReplicaConfigurationNicFirewallRuleList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRuleList">AutoscalingGroupReplicaConfigurationNicFirewallRuleList</a>

---

##### `flowLog`<sup>Required</sup> <a name="flowLog" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLog"></a>

```typescript
public readonly flowLog: AutoscalingGroupReplicaConfigurationNicFlowLogList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLogList">AutoscalingGroupReplicaConfigurationNicFlowLogList</a>

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroup"></a>

```typescript
public readonly targetGroup: AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference">AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference</a>

---

##### `dhcpInput`<sup>Optional</sup> <a name="dhcpInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcpInput"></a>

```typescript
public readonly dhcpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallActiveInput`<sup>Optional</sup> <a name="firewallActiveInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActiveInput"></a>

```typescript
public readonly firewallActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallRuleInput`<sup>Optional</sup> <a name="firewallRuleInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallRuleInput"></a>

```typescript
public readonly firewallRuleInput: IResolvable | AutoscalingGroupReplicaConfigurationNicFirewallRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFirewallRule">AutoscalingGroupReplicaConfigurationNicFirewallRule</a>[]

---

##### `firewallTypeInput`<sup>Optional</sup> <a name="firewallTypeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallTypeInput"></a>

```typescript
public readonly firewallTypeInput: string;
```

- *Type:* string

---

##### `flowLogInput`<sup>Optional</sup> <a name="flowLogInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.flowLogInput"></a>

```typescript
public readonly flowLogInput: IResolvable | AutoscalingGroupReplicaConfigurationNicFlowLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicFlowLog">AutoscalingGroupReplicaConfigurationNicFlowLog</a>[]

---

##### `lanInput`<sup>Optional</sup> <a name="lanInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lanInput"></a>

```typescript
public readonly lanInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.targetGroupInput"></a>

```typescript
public readonly targetGroupInput: AutoscalingGroupReplicaConfigurationNicTargetGroup;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a>

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallActive`<sup>Required</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallActive"></a>

```typescript
public readonly firewallActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.lan"></a>

```typescript
public readonly lan: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupReplicaConfigurationNic;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>

---


### AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference <a name="AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupIdInput">targetGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `targetGroupIdInput`<sup>Optional</sup> <a name="targetGroupIdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupIdInput"></a>

```typescript
public readonly targetGroupIdInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupReplicaConfigurationNicTargetGroup;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicTargetGroup">AutoscalingGroupReplicaConfigurationNicTargetGroup</a>

---


### AutoscalingGroupReplicaConfigurationOutputReference <a name="AutoscalingGroupReplicaConfigurationOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putNic">putNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetCpuFamily">resetCpuFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetNic">resetNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNic` <a name="putNic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putNic"></a>

```typescript
public putNic(value: IResolvable | AutoscalingGroupReplicaConfigurationNic[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putNic.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>[]

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putVolume"></a>

```typescript
public putVolume(value: IResolvable | AutoscalingGroupReplicaConfigurationVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.putVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>[]

---

##### `resetCpuFamily` <a name="resetCpuFamily" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetCpuFamily"></a>

```typescript
public resetCpuFamily(): void
```

##### `resetNic` <a name="resetNic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetNic"></a>

```typescript
public resetNic(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.resetVolume"></a>

```typescript
public resetVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList">AutoscalingGroupReplicaConfigurationNicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList">AutoscalingGroupReplicaConfigurationVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.coresInput">coresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamilyInput">cpuFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nicInput">nicInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ramInput">ramInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volumeInput">volumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cores">cores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily">cpuFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ram">ram</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nic"></a>

```typescript
public readonly nic: AutoscalingGroupReplicaConfigurationNicList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNicList">AutoscalingGroupReplicaConfigurationNicList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volume"></a>

```typescript
public readonly volume: AutoscalingGroupReplicaConfigurationVolumeList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList">AutoscalingGroupReplicaConfigurationVolumeList</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.coresInput"></a>

```typescript
public readonly coresInput: number;
```

- *Type:* number

---

##### `cpuFamilyInput`<sup>Optional</sup> <a name="cpuFamilyInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamilyInput"></a>

```typescript
public readonly cpuFamilyInput: string;
```

- *Type:* string

---

##### `nicInput`<sup>Optional</sup> <a name="nicInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.nicInput"></a>

```typescript
public readonly nicInput: IResolvable | AutoscalingGroupReplicaConfigurationNic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationNic">AutoscalingGroupReplicaConfigurationNic</a>[]

---

##### `ramInput`<sup>Optional</sup> <a name="ramInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ramInput"></a>

```typescript
public readonly ramInput: number;
```

- *Type:* number

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | AutoscalingGroupReplicaConfigurationVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

---

##### `cpuFamily`<sup>Required</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.cpuFamily"></a>

```typescript
public readonly cpuFamily: string;
```

- *Type:* string

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupReplicaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfiguration">AutoscalingGroupReplicaConfiguration</a>

---


### AutoscalingGroupReplicaConfigurationVolumeList <a name="AutoscalingGroupReplicaConfigurationVolumeList" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.get"></a>

```typescript
public get(index: number): AutoscalingGroupReplicaConfigurationVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupReplicaConfigurationVolume[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>[]

---


### AutoscalingGroupReplicaConfigurationVolumeOutputReference <a name="AutoscalingGroupReplicaConfigurationVolumeOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBackupUnitId">resetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBus">resetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImageAlias">resetImageAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImagePassword">resetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupUnitId` <a name="resetBackupUnitId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBackupUnitId"></a>

```typescript
public resetBackupUnitId(): void
```

##### `resetBus` <a name="resetBus" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetBus"></a>

```typescript
public resetBus(): void
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetImageAlias` <a name="resetImageAlias" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImageAlias"></a>

```typescript
public resetImageAlias(): void
```

##### `resetImagePassword` <a name="resetImagePassword" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetImagePassword"></a>

```typescript
public resetImagePassword(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.resetUserData"></a>

```typescript
public resetUserData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitIdInput">backupUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrderInput">bootOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.busInput">busInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAliasInput">imageAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePasswordInput">imagePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId">backupUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder">bootOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus">bus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias">imageAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePassword">imagePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupUnitIdInput`<sup>Optional</sup> <a name="backupUnitIdInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitIdInput"></a>

```typescript
public readonly backupUnitIdInput: string;
```

- *Type:* string

---

##### `bootOrderInput`<sup>Optional</sup> <a name="bootOrderInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrderInput"></a>

```typescript
public readonly bootOrderInput: string;
```

- *Type:* string

---

##### `busInput`<sup>Optional</sup> <a name="busInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.busInput"></a>

```typescript
public readonly busInput: string;
```

- *Type:* string

---

##### `imageAliasInput`<sup>Optional</sup> <a name="imageAliasInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAliasInput"></a>

```typescript
public readonly imageAliasInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imagePasswordInput`<sup>Optional</sup> <a name="imagePasswordInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePasswordInput"></a>

```typescript
public readonly imagePasswordInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `backupUnitId`<sup>Required</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.backupUnitId"></a>

```typescript
public readonly backupUnitId: string;
```

- *Type:* string

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bootOrder"></a>

```typescript
public readonly bootOrder: string;
```

- *Type:* string

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.bus"></a>

```typescript
public readonly bus: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageAlias`<sup>Required</sup> <a name="imageAlias" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imageAlias"></a>

```typescript
public readonly imageAlias: string;
```

- *Type:* string

---

##### `imagePassword`<sup>Required</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.imagePassword"></a>

```typescript
public readonly imagePassword: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupReplicaConfigurationVolume;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupReplicaConfigurationVolume">AutoscalingGroupReplicaConfigurationVolume</a>

---


### AutoscalingGroupTimeoutsOutputReference <a name="AutoscalingGroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { autoscalingGroup } from '@cdktf/provider-ionoscloud'

new autoscalingGroup.AutoscalingGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutoscalingGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.autoscalingGroup.AutoscalingGroupTimeouts">AutoscalingGroupTimeouts</a>

---



