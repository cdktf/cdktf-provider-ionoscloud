# `apigatewayRoute` Submodule <a name="`apigatewayRoute` Submodule" id="@cdktf/provider-ionoscloud.apigatewayRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayRoute <a name="ApigatewayRoute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route ionoscloud_apigateway_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

new apigatewayRoute.ApigatewayRoute(scope: Construct, id: string, config: ApigatewayRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig">ApigatewayRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig">ApigatewayRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putUpstreams">putUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetWebsocket">resetWebsocket</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigatewayRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>

---

##### `putUpstreams` <a name="putUpstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putUpstreams"></a>

```typescript
public putUpstreams(value: IResolvable | ApigatewayRouteUpstreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.putUpstreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>[]

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetType"></a>

```typescript
public resetType(): void
```

##### `resetWebsocket` <a name="resetWebsocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.resetWebsocket"></a>

```typescript
public resetWebsocket(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigatewayRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isConstruct"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

apigatewayRoute.ApigatewayRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformElement"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

apigatewayRoute.ApigatewayRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformResource"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

apigatewayRoute.ApigatewayRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

apigatewayRoute.ApigatewayRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigatewayRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigatewayRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference">ApigatewayRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreams">upstreams</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList">ApigatewayRouteUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.pathsInput">pathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreamsInput">upstreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocketInput">websocketInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.paths">paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocket">websocket</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeouts"></a>

```typescript
public readonly timeouts: ApigatewayRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference">ApigatewayRouteTimeoutsOutputReference</a>

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreams"></a>

```typescript
public readonly upstreams: ApigatewayRouteUpstreamsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList">ApigatewayRouteUpstreamsList</a>

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.pathsInput"></a>

```typescript
public readonly pathsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigatewayRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `upstreamsInput`<sup>Optional</sup> <a name="upstreamsInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.upstreamsInput"></a>

```typescript
public readonly upstreamsInput: IResolvable | ApigatewayRouteUpstreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>[]

---

##### `websocketInput`<sup>Optional</sup> <a name="websocketInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocketInput"></a>

```typescript
public readonly websocketInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `websocket`<sup>Required</sup> <a name="websocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.websocket"></a>

```typescript
public readonly websocket: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayRouteConfig <a name="ApigatewayRouteConfig" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.Initializer"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

const apigatewayRouteConfig: apigatewayRoute.ApigatewayRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | The ID of the API Gateway that the route belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.methods">methods</a></code> | <code>string[]</code> | The HTTP methods that the route should match. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.name">name</a></code> | <code>string</code> | The name of the API Gateway Route. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.paths">paths</a></code> | <code>string[]</code> | The paths that the route should match. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.upstreams">upstreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>[]</code> | upstreams block. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.type">type</a></code> | <code>string</code> | This field specifies the protocol used by the ingress to route traffic to the backend service. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.websocket">websocket</a></code> | <code>boolean \| cdktf.IResolvable</code> | To enable websocket support. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The ID of the API Gateway that the route belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#gateway_id ApigatewayRoute#gateway_id}

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

The HTTP methods that the route should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#methods ApigatewayRoute#methods}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the API Gateway Route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#name ApigatewayRoute#name}

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.paths"></a>

```typescript
public readonly paths: string[];
```

- *Type:* string[]

The paths that the route should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#paths ApigatewayRoute#paths}

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.upstreams"></a>

```typescript
public readonly upstreams: IResolvable | ApigatewayRouteUpstreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>[]

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#upstreams ApigatewayRoute#upstreams}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigatewayRouteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#timeouts ApigatewayRoute#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

This field specifies the protocol used by the ingress to route traffic to the backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#type ApigatewayRoute#type}

---

##### `websocket`<sup>Optional</sup> <a name="websocket" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteConfig.property.websocket"></a>

```typescript
public readonly websocket: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

To enable websocket support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#websocket ApigatewayRoute#websocket}

---

### ApigatewayRouteTimeouts <a name="ApigatewayRouteTimeouts" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.Initializer"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

const apigatewayRouteTimeouts: apigatewayRoute.ApigatewayRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#create ApigatewayRoute#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#default ApigatewayRoute#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#delete ApigatewayRoute#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#update ApigatewayRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#create ApigatewayRoute#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#default ApigatewayRoute#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#delete ApigatewayRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#update ApigatewayRoute#update}.

---

### ApigatewayRouteUpstreams <a name="ApigatewayRouteUpstreams" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.Initializer"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

const apigatewayRouteUpstreams: apigatewayRoute.ApigatewayRouteUpstreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.host">host</a></code> | <code>string</code> | The host of the upstream. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.loadbalancer">loadbalancer</a></code> | <code>string</code> | The load balancer algorithm. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.port">port</a></code> | <code>number</code> | The port of the upstream. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.scheme">scheme</a></code> | <code>string</code> | The target URL of the upstream. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.weight">weight</a></code> | <code>number</code> | Weight with which to split traffic to the upstream. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The host of the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#host ApigatewayRoute#host}

---

##### `loadbalancer`<sup>Optional</sup> <a name="loadbalancer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.loadbalancer"></a>

```typescript
public readonly loadbalancer: string;
```

- *Type:* string

The load balancer algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#loadbalancer ApigatewayRoute#loadbalancer}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port of the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#port ApigatewayRoute#port}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

The target URL of the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#scheme ApigatewayRoute#scheme}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Weight with which to split traffic to the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.9/docs/resources/apigateway_route#weight ApigatewayRoute#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayRouteTimeoutsOutputReference <a name="ApigatewayRouteTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

new apigatewayRoute.ApigatewayRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteTimeouts">ApigatewayRouteTimeouts</a>

---


### ApigatewayRouteUpstreamsList <a name="ApigatewayRouteUpstreamsList" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

new apigatewayRoute.ApigatewayRouteUpstreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.get"></a>

```typescript
public get(index: number): ApigatewayRouteUpstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayRouteUpstreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>[]

---


### ApigatewayRouteUpstreamsOutputReference <a name="ApigatewayRouteUpstreamsOutputReference" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer"></a>

```typescript
import { apigatewayRoute } from '@cdktf/provider-ionoscloud'

new apigatewayRoute.ApigatewayRouteUpstreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetLoadbalancer">resetLoadbalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoadbalancer` <a name="resetLoadbalancer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetLoadbalancer"></a>

```typescript
public resetLoadbalancer(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancerInput">loadbalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancer">loadbalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `loadbalancerInput`<sup>Optional</sup> <a name="loadbalancerInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancerInput"></a>

```typescript
public readonly loadbalancerInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `loadbalancer`<sup>Required</sup> <a name="loadbalancer" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.loadbalancer"></a>

```typescript
public readonly loadbalancer: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayRouteUpstreams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.apigatewayRoute.ApigatewayRouteUpstreams">ApigatewayRouteUpstreams</a>

---



